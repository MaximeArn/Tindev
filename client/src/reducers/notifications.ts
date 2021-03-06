import { NotificationAction } from "../models/actions";
import { NotificationState } from "../models/states";

const initialState: NotificationState = {
  notifications: {
    counter: 0,
    tooltips: [],
  },
  tray: false,
};

const notifications = (
  state = initialState,
  { type, notifications }: NotificationAction
) => {
  switch (type) {
    case "SET_NOTIFICATIONS":
      return { ...state, notifications };
    case "SET_TRAY_STATUS":
      return { ...state, tray: !state.tray };
    default:
      return state;
  }
};

export default notifications;
