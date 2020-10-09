/** @format */

import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../reducers";
import { auth } from "../middlewares";

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, storeEnhancer(applyMiddleware(auth)));

export default store;
