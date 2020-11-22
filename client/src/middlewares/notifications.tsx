import { AnyAction, Dispatch, Middleware } from "redux";
import { url } from "../environments/api";
import { AxiosSubmit } from "../models/axios";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const getNotifications = async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data } = await axios.get("/notifications");
    console.log(data);
  } catch ({ response }) {
    console.log(response);
  }
};

const notifications: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type } = action;

  switch (type) {
    case "GET_NOTIFICATIONS":
      getNotifications(dispatch);
      break;
    default:
      next(action);
      break;
  }
};

export default notifications;
