/** @format */

import auth from "./auth";
import error from "./error";
import loaders from "./loaders";

import { combineReducers } from "redux";

export default combineReducers({
  auth,
  error,
  loaders,
});
