import { Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import { socketUrl } from "../environments/api";
import io from "socket.io-client";

const socketConnection = ({ getState, dispatch }: AxiosSubmit) => {
  const socket = io(`${socketUrl}/chat`);
};

const socket: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type } = action;

  switch (type) {
    case "SOCKET_CONNECTION":
      socketConnection({ getState, dispatch });
      break;
    default:
      next(action);
      break;
  }
};

export default socket;
