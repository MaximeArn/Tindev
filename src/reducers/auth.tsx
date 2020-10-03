/** @format */

import { Authentication } from "../models/states";
import { AuthenticationAction } from "../models/actions";

const initialState: Authentication = {
  showRegister: true,
  showLogin: true,
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
