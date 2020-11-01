/** @format */

import { ErrorAction } from "../models/actions";
import { ErrorState } from "../models/states";
import resetErrorValues from "../utils/resetInputs";

const initialState: ErrorState = {
  auth: {
    registerErrorMessage: "",
    loginErrorMessage: "",
  },
  projectCreationErrorMessage: "",
  projectListErrorMessage: "",
  projectApplyErrorMessage: "",
  projectEditionErrorMessage: "",
  userProfileErrorMessage: "",
};

const error = (state = initialState, { type, error }: ErrorAction) => {
  switch (type) {
    case "REGISTER_ERROR_HANDLER":
      return { ...state, auth: { ...state.auth, registerErrorMessage: error } };
    case "LOGIN_ERROR_HANDLER":
      return { ...state, auth: { ...state.auth, loginErrorMessage: error } };
    case "RESET_AUTH_MODAL_ERROR_VALUES":
      return { ...state, auth: resetErrorValues(state.auth) };
    case "PROJECT_LIST_ERROR_HANDLER":
      return { ...state, projectListErrorMessage: error };
    case "PROJECT_CREATION_ERROR_HANDLER":
      const err = error ? error : "";
      return { ...state, projectCreationErrorMessage: err };
    case "PROJECT_APPLY_ERROR_HANDLER":
      return { ...state, projectApplyErrorMessage: error };
    case "USER_PROFILE_ERROR_HANDLER":
      return { ...state, userProfileErrorMessage: error };
    case "PROJECT_EDITION_ERROR_HANDLER":
      return { ...state, projectEditionErrorMessage: error };
    default:
      return state;
  }
};

export default error;
