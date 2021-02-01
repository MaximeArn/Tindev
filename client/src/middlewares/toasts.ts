import { Middleware } from "redux";
import { errorToast, successToast } from "../utils/toastify";

const toasts: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, message } = action;

  switch (type) {
    case "toasts/error":
      return errorToast(message);
    case "toasts/success":
      return successToast(message);
    default:
      next(action);
      break;
  }
};
