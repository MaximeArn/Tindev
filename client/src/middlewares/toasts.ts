import { Middleware } from "redux";
import { errorToast, successToast } from "../utils/toastify";

const toasts: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, message } = action;

  switch (type) {
    case "toasts/error":
      errorToast(message);
      break;
    case "toasts/success":
      return successToast(message);
    default:
      next(action);
      break;
  }
};

export default toasts;
