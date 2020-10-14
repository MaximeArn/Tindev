/** @format */

import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../reducers";
import { auth, project, categories } from "../middlewares";

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  storeEnhancer(applyMiddleware(auth, project, categories))
);

export default store;
