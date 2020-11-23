import { NotificationAction } from "../models/actions";
import { NotificationState } from "../models/states";

const initialState: NotificationState = {
  notifications: {
    counter: 0,
    tooltips: [],
  },
};

const notifications = (
  state = initialState,
  { type, tooltip, notifications }: NotificationAction
) => {
  switch (type) {
    case "SET_NOTIFICATION":
      return {
        ...state,
        notifications: {
          counter: state.notifications.counter + 1,
          tooltips: [...state.notifications.tooltips, tooltip],
        },
      };
    case "SET_NOTIFICATIONS":
      return { ...state, notifications };
    default:
      return state;
  }
};

export default notifications;
