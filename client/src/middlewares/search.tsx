import { AxiosSubmit } from "../models/axios";
import axios from "axios";
import { url } from "../environments/api";
import { Middleware } from "redux";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const sendSearch = ({ dispatch, getState }: AxiosSubmit) => {
  const { research } = getState().search;
};

const search: Middleware = ({ dispatch, getState }) => (next) => (action) => {
  switch (action.type) {
    case "SEND_RESEARCH":
      sendSearch({ dispatch, getState });
      break;
    default:
      next(action);
      break;
  }
};

export default search;
