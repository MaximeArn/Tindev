/** @format */

import auth from "./auth";
import error from "./error";
import success from "./success";
import project from "./project";
import loaders from "./loaders";
import categories from "./categories";
import modal from "./modal";
import users from "./users";
import search from "./search";
import navbar from "./navbar";
import message from "./message";
import { combineReducers } from "redux";

export default combineReducers({
  auth,
  navbar,
  search,
  project,
  users,
  categories,
  loaders,
  modal,
  error,
  success,
  message,
});
