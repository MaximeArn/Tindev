import { NotificationAction } from "../models/actions";
import { NotificationState } from "../models/states";

const initialState: NotificationState = {
  notifications: {
    count: 0,
    message: "",
  },
};

const notifications = (
  state = initialState,
  { type, message }: NotificationAction
) => {
  switch (type) {
    case "SET_NOTIFICATIONS":
      return {
        ...state,
        notifications: { count: state.notifications.count + 1, message },
      };
    default:
      return state;
  }
};

export default notifications;
