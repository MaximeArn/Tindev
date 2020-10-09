import { ErrorAction } from "../models/actions";
import { AuthenticationError } from "../models/states";

const initialState: AuthenticationError = {
  registerErrorMessage: "",
  loginErrorMessage: "",
};

const error = (state = initialState, { type, error }: ErrorAction) => {
  switch (type) {
    case "REGISTER_ERROR_HANDLER":
      return { ...state, registerErrorMessage: error };
    case "LOGIN_ERROR_HANDLER":
      return { ...state, loginErrorMessage: error };
    default:
      return state;
  }
};

export default error;
