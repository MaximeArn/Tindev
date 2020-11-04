/** @format */

import { Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import { socketUrl } from "../environments/api";
import axios from "axios";
import Cookies from "js-cookie";
import io from "socket.io-client";
import { url } from "../environments/api";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

let socket: any;
const token = Cookies.get("token");

const serverSocketListener = ({ getState, dispatch }: AxiosSubmit) => {
  socket.on(
    "chat-message",
    ({ message, date }: { message: string; date: Date }) => {
      console.log("MESSAGE : ", message);
      dispatch({ type: "SET_CHAT_MESSAGES", message, date });
    }
  );
};

const sendSocket = (
  { getState, dispatch }: AxiosSubmit,
  target: string,
  id: string
) => {
  const { message } = getState().message;
  socket.emit("chat-message", { to: { id, name: target }, message, token });
  dispatch({ type: "SET_CHAT_MESSAGE" });
};

const socketMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type, name, id, toId } = action;
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
