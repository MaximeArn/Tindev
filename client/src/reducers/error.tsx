import { ErrorAction } from "../models/actions";
import { AuthenticationError } from "../models/states";

const initialState: AuthenticationError = {
  registerErrorMessage: "",
  loginErrorMessage: "",
  projectCreationErrorMessage: "",
};

const error = (state = initialState, { type, error }: ErrorAction) => {
  switch (type) {
    case "REGISTER_ERROR_HANDLER":
      return { ...state, registerErrorMessage: error };
    case "LOGIN_ERROR_HANDLER":
      return { ...state, loginErrorMessage: error };
    case "PROJECT_CREATION_ERROR_HANDLER":
      return { ...state, projectCreationErrorMessage: error };
    default:
      return state;
  }
};

export default error;
