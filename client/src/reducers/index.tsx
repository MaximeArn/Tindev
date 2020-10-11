import auth from "./auth";
import error from "./error";
import { project } from "./project";
import { combineReducers } from "redux";

export default combineReducers({
  auth,
  error,
  project,
});
