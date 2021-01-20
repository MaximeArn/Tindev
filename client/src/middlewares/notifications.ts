import { AnyAction, Dispatch, Middleware } from "redux";
import axios from "../utils/axiosInstance";

const getNotifications = async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data: notifications } = await axios.get("/notifications");
    dispatch({ type: "SET_NOTIFICATIONS", notifications });
  } catch ({ response }) {
    console.log(response);
  }
};

const deleteNotification = async (dispatch: Dispatch<AnyAction>, id: string) => {
  try {
    const { data: notifications } = await axios.get(`/notifications/${id}`);
    dispatch({ type: "SET_NOTIFICATIONS", notifications });
  } catch ({ response }) {
    console.log(response);
  }
};

const resetNotifications = async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data: notifications } = await axios.patch("/notifications/reset");
    dispatch({ type: "SET_NOTIFICATIONS", notifications });
  } catch ({ response }) {
    console.error(response);
  }
};

const notifications: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, id } = action;

  switch (type) {
    case "GET_NOTIFICATIONS":
      getNotifications(dispatch);
      break;
    case "DELETE_NOTIFICATION":
      deleteNotification(dispatch, id);
      break;
    case "RESET_NOTIFICATION_COUNTER":
      resetNotifications(dispatch);
      break;
    default:
      next(action);
      break;
  }
};

export default notifications;
