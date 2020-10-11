/** @format */

import { Loaders } from "../models/states";
import { LoadersActions } from "../models/actions";

const initialState: Loaders = {
  registerLoader: false,
  loginLoader: false,
};

const loaders = (state = initialState, { type, value }: LoadersActions) => {
  switch (type) {
    case "SET_REGISTER_LOADER":
      console.log("value", value);
      return {
        ...state,
        registerLoader: value,
      };
    default:
      return state;
  }
};

export default loaders;
