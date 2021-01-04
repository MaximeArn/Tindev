import { Authentication } from "../models/states";
import { AuthenticationAction } from "../models/actions";
import resetInputs from "../utils/resetInputs";

export const initialState: any = {
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
  forgotPassword: {
    email: "",
  },
  user: null,
};

const auth = (
  state = initialState,
  { type, inputName, inputValue, credentials, authType }: any
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
    case "DISCONNECTION":
      return initialState;
    default:
      return state;
  }
};

export default auth;
