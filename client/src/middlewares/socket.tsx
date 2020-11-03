/** @format */

import { Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import { socketUrl } from "../environments/api";
import io from "socket.io-client";

let socket: any;

const serverSocketListener = ({ getState, dispatch }: AxiosSubmit) => {
  socket.on("chat-message", (message: string) => {
    console.log("MESSAGE : ", message);
    dispatch({ type: "SET_CHAT_MESSAGES", message });
  });
};

const sendSocket = ({ getState, dispatch }: AxiosSubmit, target: string) => {
  const { message } = getState().message;
  socket.emit("chat-message", { to: target, message });
};

const socketMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type, target } = action;
  const { user } = getState().auth;

  switch (type) {
    case "SOCKET_CONNECTION":
      const { username } = user;
      console.log(username);
      socket = io(`${socketUrl}/chat`, { query: { username } });
      serverSocketListener({ getState, dispatch });
      break;
    case "SEND_CHAT_MESSAGE":
      sendSocket({ getState, dispatch }, target);
      break;
    default:
      next(action);
      break;
  }
};

export default socketMiddleware;
