/** @format */

import { Authentication } from "../models/states";
import { AuthenticationAction } from "../models/actions";

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
    age: null,
  },
  login: {
    email: "",
    password: "",
  },
};

const auth = (state = initialState, action: AuthenticationAction) => state;

export default auth;
