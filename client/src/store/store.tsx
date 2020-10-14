/** @format */

import { createStore } from "redux";
import reducers from "../reducers";
import storeEnhancer from "../middlewares";

const store = createStore(reducers, storeEnhancer);

export default store;
