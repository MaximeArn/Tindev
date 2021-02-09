import { AnyAction, Dispatch, Middleware } from "redux";
import { ChatWindow, SocketServerResponse } from "../models/chat";
import io from "socket.io-client";
import { socketUrl } from "../environments/api";
import { Notification } from "../models/notifications";
import { SocketMessage } from "../models/socket";
import { Project } from "../models/projects";
let socket: any;

const socketEventListener = (dispatch: Dispatch<AnyAction>) => {
  socket.on("chat-message", (message: SocketServerResponse) => {
    dispatch({ type: "SET_CHAT_MESSAGES", message });
  });

  socket.on("notification", (notifications: Notification) =>
    dispatch({ type: "SET_NOTIFICATIONS", notifications })
  );

  socket.on("chat-popup", (chatWindows: ChatWindow[]) =>
    dispatch({ type: "SET_CHAT_WINDOWS", chatWindows })
  );

  socket.on("expell-user", (message: string) => {
    dispatch({ type: "SEND_ACCOUNT_SUSPENSION_REQUEST", message });
  });

  socket.on("project-ownership", (project: Project) => {
    dispatch({ type: "SET_PROJECT", project });
  });

  socket.on("project-contribution", (project: Project) => {
    dispatch({ type: "SET_PROJECT", project });
  });
};

const sendMessage = (to: SocketMessage, message: string) => {
  socket.emit("chat-message", { to, message });
};

const socketMiddleware: Middleware = ({ dispatch }) => (next) => (action) => {
  const { type, name, id, message } = action;

  switch (type) {
    case "SOCKET_CONNECTION":
      socket = io(`${socketUrl}/chat`);
      socketEventListener(dispatch);
      break;
    case "SEND_CHAT_MESSAGE":
      sendMessage({ name, id }, message);
      break;
    default:
      next(action);
      break;
  }
};

export default socketMiddleware;
