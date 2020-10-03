/** @format */

import { createStore, combineReducers, compose } from "redux";
import auth from "../reducers/auth";

const reducers = combineReducers({
  auth,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
