import { AnyAction, Dispatch, Middleware } from "redux";
import axios from "axios";
import { ChatWindow, SocketServerResponse } from "../models/chat";
import Cookies from "js-cookie";
import io from "socket.io-client";
import { url, socketUrl } from "../environments/api";
import { Notification } from "../models/notifications";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
let socket: any;

const serverSocketListener = (dispatch: Dispatch<AnyAction>) => {
  socket.on("chat-message", (message: SocketServerResponse) => {
    dispatch({ type: "SET_CHAT_MESSAGES", message });
  });

  socket.on("notification", (notifications: Notification) =>
    dispatch({ type: "SET_NOTIFICATIONS", notifications })
  );

  socket.on("chat-popup", (windows: ChatWindow[]) =>
    dispatch({ type: "SET_CHAT_WINDOWS", windows })
  );

  socket.on("expell-user", (message: string) => {
    dispatch({ type: "DISCONNECT_USER", message });
  });
};

const sendMessage = (
  target: string,
  id: string,
  message: string,
  token: string
) => {
  socket.emit("chat-message", { to: { id, name: target }, message, token });
};

const socketMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type, name, id, message } = action;
  const { user } = getState().auth;
  const token = Cookies.get("token");

  switch (type) {
    case "SOCKET_CONNECTION":
      const { username } = user;
      socket = io(`${socketUrl}/chat`, { query: { username, token } });
      serverSocketListener(dispatch);
      break;
    case "SEND_CHAT_MESSAGE":
      sendMessage(name, id, message, token);
      break;
    default:
      next(action);
      break;
  }
};

export default socketMiddleware;
