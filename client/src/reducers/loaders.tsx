/** @format */

import { Loaders } from "../models/states";
import { LoadersActions } from "../models/actions";

const initialState: Loaders = {
  registerLoader: false,
  loginLoader: false,
  projectListLoader: false,
};

const loaders = (state = initialState, { type, value }: LoadersActions) => {
  switch (type) {
    case "SET_REGISTER_LOADER":
      return {
        ...state,
        registerLoader: value,
      };
    case "SET_LOGIN_LOADER":
      return {
        ...state,
        loginLoader: value,
      };
    case "SET_PROJECTLIST_LOADER":
      return { ...state, projectListLoader: value };
    default:
      return state;
  }
};

export default loaders;
