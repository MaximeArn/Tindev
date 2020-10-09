/** @format */

import { Authentication } from "../models/states";
import { AuthenticationAction } from "../models/actions";

const initialState: Authentication = {
  register: {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    age: undefined,
  },
  login: {
    email: "",
    password: "",
  },
  user: null,
};

const auth = (
  state = initialState,
  { type, inputName, inputValue, credentials }: AuthenticationAction
): Authentication => {
  switch (type) {
    case "GET_REGISTER_INPUT_VALUE":
      return {
        ...state,
        register: { ...state.register, [inputName]: inputValue },
      };
    case "GET_LOGIN_INPUT_VALUE":
      return { ...state, login: { ...state.login, [inputName]: inputValue } };
    case "CONNECT_USER":
      return { ...state, user: credentials };
    default:
      return { ...state };
  }
};

export default auth;
