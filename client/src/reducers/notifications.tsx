import { NotificationAction } from "../models/actions";
import { NotificationState } from "../models/states";

const initialState: NotificationState = {
  notifications: null,
};

const notifications = (state = initialState, { type }: NotificationAction) => {
  switch (type) {
    default:
      return state;
  }
};

export default notifications;
