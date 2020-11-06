/** @format */

import { Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import { ChatWindow } from "../models/chat";
import { socketUrl } from "../environments/api";
import axios from "axios";
import { SocketServerResponse } from "../models/chat";
import Cookies from "js-cookie";
import io from "socket.io-client";
import { url } from "../environments/api";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

let socket: any;
const token = Cookies.get("token");

const serverSocketListener = ({ getState, dispatch }: AxiosSubmit) => {
  const { username } = getState().auth.user;
  socket.on("chat-message", (message: SocketServerResponse) => {
    message.to == username &&
      dispatch({
        type: "OPEN_CHAT_WINDOW",
        id: message.fromId,
        username: message.from,
      });

    dispatch({ type: "SET_CHAT_MESSAGES", message });
  });
};

const sendSocket = (target: string, id: string, message: string) => {
  console.log("SENDING MESSAGE TO SOCKET", { to: { id, name: target } });
  socket.emit("chat-message", { to: { id, name: target }, message, token });
};

const socketMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type, name, id, message } = action;
  const { user } = getState().auth;

  switch (type) {
    case "SOCKET_CONNECTION":
      const { username } = user;
      socket = io(`${socketUrl}/chat`, { query: { username, token } });
      serverSocketListener({ getState, dispatch });
      break;
    case "SEND_CHAT_MESSAGE":
      sendSocket(name, id, message);
      break;
    default:
      next(action);
      break;
  }
};

export default socketMiddleware;
