import { AnyAction, Dispatch, Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import axios from "axios";
import { url } from "../environments/api";
import { ChatWindow } from "../models/chat";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const setChatWindow = (
  { getState, dispatch }: AxiosSubmit,
  id: string,
  username: string
) => {
  const { chatWindows } = getState().message;

  !chatWindows.some(({ id: _id }: ChatWindow) => id == _id) &&
    axios
      .patch("/users/chat_window", { id, username })
      .then(({ data: windows }) =>
        dispatch({ type: "SET_CHAT_WINDOWS", windows })
      );
};

const getChatWindows = (dispatch: Dispatch<AnyAction>) => {
  axios
    .get("/users/chat_windows")
    .then(({ data: windows }) =>
      dispatch({ type: "SET_CHAT_WINDOWS", windows })
    );
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
    default:
      next(action);
      break;
  }
};

export default chat;
