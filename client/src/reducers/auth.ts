import { Authentication } from "../models/states";
import { AuthenticationAction } from "../models/actions";

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
  resetPassword: {
    password: "",
    confirmPassword: "",
  },
  user: null,
  oAuth2AuthorizationUrl: null,
};

const auth = (
  state = initialState,
  { type, inputName, inputValue, credentials, authType, oAuth2AuthorizationUrl }: any
): Authentication => {
  switch (type) {
    case "GET_REGISTER_INPUT_VALUE":
      return {
        ...state,
        register: { ...state.register, [inputName]: inputValue },
      };
    case "GET_LOGIN_INPUT_VALUE":
      return { ...state, login: { ...state.login, [inputName]: inputValue } };
    case "GET_FORGOT_PASSWORD_INPUT_VALUE":
      return { ...state, forgotPassword: { [inputName]: inputValue } };
    case "GET_RESET_PASSWORD_INPUT_VALUE":
      return {
        ...state,
        resetPassword: { ...state.resetPassword, [inputName]: inputValue },
      };
    case "RESET_AUTH_INPUTS_VALUES":
      return { ...state, [authType]: initialState[authType] };
    case "SET_OAUTH_AUTHORIZATION_URL":
      return { ...state, oAuth2AuthorizationUrl };
    case "CONNECT_USER":
      return { ...state, user: credentials };
    default:
      return state;
  }
};

export default auth;
