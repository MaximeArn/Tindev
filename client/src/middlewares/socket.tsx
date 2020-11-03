import { Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import { socketUrl } from "../environments/api";
import io from "socket.io-client";

// const getSocketMessage = ({ getState, dispatch }: AxiosSubmit) => {
//   socket.on("chat-message", (message: string) => {
//     dispatch({ type: "SET_CHAT_MESSAGES", message });
//   });
// };

const sendSocket = ({ getState, dispatch }: AxiosSubmit) => {
  const { message } = getState().message;
  const { username } = getState().auth.user;
  const socket = io(`${socketUrl}/chat`, { query: { username } });

  socket.emit("chat-message", { message });
};

const socketMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type } = action;

  switch (type) {
    case "GET_SOCKET_MESSAGE":
      // getSocketMessage({ getState, dispatch });
      break;
    case "SEND_CHAT_MESSAGE":
      sendSocket({ getState, dispatch });
      break;
    default:
      next(action);
      break;
  }
};

export default socketMiddleware;
