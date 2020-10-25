import { act } from "react-dom/test-utils";
import { AxiosSubmit } from "../models/axios";
import { Middleware } from "redux";

const sendSearch = ({ dispatch, getState }: AxiosSubmit) => {};

const search: Middleware = ({ dispatch, getState }) => (next) => (action) => {
  switch (action.type) {
    case "SEND_SEARCH":
      sendSearch({ dispatch, getState });
      break;
    default:
      next(action);
      break;
  }
};

export default search;
