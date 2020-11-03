/** @format */

import auth from "./auth";
import project from "./project";
import categories from "./categories";
import users from "./users";
import search from "./search";
import socket from "./socket";
import { compose, applyMiddleware } from "redux";

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default storeEnhancer(
  applyMiddleware(auth, socket, search, project, users, categories)
);
