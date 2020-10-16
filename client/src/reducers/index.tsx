/** @format */

import auth from "./auth";
import error from "./error";
import project from "./project";
import loaders from "./loaders";
import categories from "./categories";
import modal from "./modal";
import { combineReducers } from "redux";

export default combineReducers({
  auth,
  error,
  project,
  categories,
  loaders,
  modal,
});
