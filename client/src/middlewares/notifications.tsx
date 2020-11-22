import { Middleware } from "redux";
import { url } from "../environments/api";
import { AxiosSubmit } from "../models/axios";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const notifications: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type } = action;

  switch (type) {
    case "GET_NOTIFICATIONS":
      break;
    default:
      next(action);
      break;
  }
};

export default notifications;
