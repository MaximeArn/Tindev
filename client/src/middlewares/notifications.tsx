import { AnyAction, Dispatch, Middleware } from "redux";
import { url } from "../environments/api";
import { AxiosSubmit } from "../models/axios";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const getNotifications = async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data: notifications } = await axios.get("/notifications");
    dispatch({ type: "SET_NOTIFICATIONS", notifications });
  } catch ({
    response: {
      data: { msg },
    },
  }) {
    console.log(msg);
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
