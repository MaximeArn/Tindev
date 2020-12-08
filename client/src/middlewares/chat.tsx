import { Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import axios from "axios";
import { url } from "../environments/api";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const setChatWindow = (
  { getState, dispatch }: AxiosSubmit,
  id: string,
  username: string
) => {
  axios
    .patch("/users/chat_window", { id, username })
    .then(({ data }) => console.log(data))
    .catch(({ response: { data } }) => console.log(data));
};

const chat: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, id, username } = action;

  switch (type) {
    case "OPEN_CHAT_WINDOW":
      setChatWindow({ dispatch, getState }, id, username);
      break;
    default:
      next(action);
      break;
  }
};

export default chat;
