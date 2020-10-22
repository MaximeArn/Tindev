/** @format */

import auth from "./auth";
import project from "./project";
import categories from "./categories";
import users from "./users";
import { compose, applyMiddleware } from "redux";

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default storeEnhancer(applyMiddleware(auth, project, users, categories));
