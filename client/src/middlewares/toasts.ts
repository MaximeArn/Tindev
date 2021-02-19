import { Middleware } from "redux";
import { errorToast, successToast } from "../utils/toastify";

const toasts: Middleware = (store) => (next) => (action) => {
  const { type, message } = action;

  switch (type) {
    case "toasts/error":
      errorToast(message);
      break;
    case "toasts/success":
      successToast(message);
      break;
    default:
      next(action);
      break;
  }
};

export default toasts;
