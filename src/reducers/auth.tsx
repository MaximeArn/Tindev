/** @format */

import { Authentication } from "../models/states";
import { AuthenticationAction } from "../models/actions";
import Register from "../components/containers/Register";

const initialState: Authentication = {
  showRegister: false,
  showLogin: false,
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
};

const auth = (
  state = initialState,
  { type, inputName, inputValue }: AuthenticationAction
): Authentication => {
  switch (type) {
    case "GET_INPUT_VALUE":
      return {
        ...state,
        register: { ...state.register, [inputName]: inputValue },
      };
    default:
      return { ...state };
  }
};

export default auth;
