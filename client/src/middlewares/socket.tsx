/** @format */

import { Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import { socketUrl } from "../environments/api";
import Cookies from "js-cookie";
import io from "socket.io-client";

let socket: any;

const serverSocketListener = ({ getState, dispatch }: AxiosSubmit) => {
  socket.on("chat-message", (message: string) => {
    console.log("MESSAGE : ", message);
    dispatch({ type: "SET_CHAT_MESSAGES", message });
  });
};

const sendSocket = (
  { getState, dispatch }: AxiosSubmit,
  target: string,
  id: string
) => {
  const { message } = getState().message;
  const token = Cookies.get("token");
  socket.emit("chat-message", { to: { id, name: target }, message, token });
};

const socketMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type, name, id } = action;
  const { user } = getState().auth;

  switch (type) {
    case "SOCKET_CONNECTION":
      const { username } = user;
      socket = io(`${socketUrl}/chat`, { query: { username } });
      serverSocketListener({ getState, dispatch });
      break;
    case "SEND_CHAT_MESSAGE":
      sendSocket({ getState, dispatch }, name, id);
      break;
    default:
      next(action);
      break;
  }
};

export default socketMiddleware;
