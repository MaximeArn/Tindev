import { AnyAction, Dispatch, Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import { ChatWindow } from "../models/chat";
import axios from "../utils/axiosInstance";

const setChatWindow = (
  { getState, dispatch }: AxiosSubmit,
  id: string,
  username: string
) => {
  const { chatWindows } = getState().message;

  !chatWindows.some(({ id: _id }: ChatWindow) => id == _id) &&
    axios
      .patch("/users/chat_window", { id, username })
      .then(({ data: chatWindows }) =>
        dispatch({ type: "SET_CHAT_WINDOWS", chatWindows })
      );
};

const getChatWindows = (dispatch: Dispatch<AnyAction>) => {
  axios
    .get("/users/chat_windows")
    .then(({ data: chatWindows }) => dispatch({ type: "SET_CHAT_WINDOWS", chatWindows }));
};

const closeChatWindow = (dispatch: Dispatch<AnyAction>, id: string) => {
  axios
    .patch("/users/close_window", { id })
    .then(({ data: chatWindows }) => dispatch({ type: "SET_CHAT_WINDOWS", chatWindows }))
    .catch(({ response: { data } }) => console.error(data));
};

const chat: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, id, username } = action;

  switch (type) {
    case "OPEN_CHAT_WINDOW":
      setChatWindow({ dispatch, getState }, id, username);
      break;
    case "GET_CHAT_WINDOWS":
      getChatWindows(dispatch);
      break;
    case "CLOSE_CHAT_WINDOW":
      closeChatWindow(dispatch, id);
      break;
    default:
      next(action);
      break;
  }
};

export default chat;
