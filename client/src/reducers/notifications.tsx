import { NotificationAction } from "../models/actions";
import { NotificationState } from "../models/states";

const initialState: NotificationState = {
  notifications: {
    counter: 0,
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
        notifications: { counter: state.notifications.counter + 1, message },
      };
    default:
      return state;
  }
};

export default notifications;
