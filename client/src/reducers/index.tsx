import auth from "./auth";
import error from "./error";
import { combineReducers } from "redux";

export default combineReducers({
  auth,
  error,
});
