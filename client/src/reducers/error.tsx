/** @format */

import { ErrorAction } from "../models/actions";
import { ErrorState } from "../models/states";

const initialState: ErrorState = {
  registerErrorMessage: "",
  loginErrorMessage: "",
  projectCreationErrorMessage: "",
  projectListErrorMessage: "",
  projectApplyErrorMessage: "",
  projectDetailErrorMessage: "",
};

const error = (state = initialState, { type, error }: ErrorAction) => {
  switch (type) {
    case "REGISTER_ERROR_HANDLER":
      return { ...state, registerErrorMessage: error };
    case "LOGIN_ERROR_HANDLER":
      return { ...state, loginErrorMessage: error };
    case "PROJECT_LIST_ERROR_HANDLER":
      return { ...state, projectListErrorMessage: error };
    case "PROJECT_CREATION_ERROR_HANDLER":
      return { ...state, projectCreationErrorMessage: error };
    case "PROJECT_APPLY_ERROR_HANDLER":
      return { ...state, projectApplyErrorMessage: error };
    case "PROJECT_DETAIL_ERROR_HANDLER":
      return { ...state, projectDetailErrorMessage: error };
    default:
      return state;
  }
};

export default error;
