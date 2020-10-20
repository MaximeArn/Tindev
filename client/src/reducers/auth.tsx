/** @format */

import { Authentication } from "../models/states";
import { AuthenticationAction } from "../models/actions";
import resetInputs from "../utils/resetInputs";
import Cookies from "js-cookie";

const initialState: any = {
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
  { type, inputName, inputValue, credentials, authType }: AuthenticationAction
): Authentication => {
  switch (type) {
    case "GET_REGISTER_INPUT_VALUE":
      return {
        ...state,
        register: { ...state.register, [inputName]: inputValue },
      };
    case "GET_LOGIN_INPUT_VALUE":
      return { ...state, login: { ...state.login, [inputName]: inputValue } };
    case "RESET_AUTH_INPUTS_VALUES":
      return { ...state, [authType]: resetInputs(state[authType]) };
    case "CONNECT_USER":
      return { ...state, user: credentials };
    case "DISCONNECT_USER":
      Cookies.remove("token");
      return { ...state, user: null };
    default:
      return { ...state };
  }
};

export default auth;
