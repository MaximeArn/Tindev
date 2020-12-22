import { ErrorAction } from "../models/actions";
import { ErrorState } from "../models/states";
import resetErrorValues from "../utils/resetInputs";

const initialState: ErrorState = {
  auth: {
    registerErrorMessage: "",
    loginErrorMessage: {
      msg: "",
      email: null,
    },
  },
  projectDetailsErrorMessage: "",
  projectCreationErrorMessage: "",
  projectListErrorMessage: "",
  projectApplyErrorMessage: "",
  projectEditionErrorMessage: "",
  userProfileErrorMessage: "",
  userProfileEditionErrorMessage: "",
  accountActivationErrorMessage: "",
  accountTokenVerificationErrorMessage: {
    msg: "",
    userId: null,
  },
};

const error = (state = initialState, { type, error }: ErrorAction) => {
  const err = error || "";
  switch (type) {
    case "REGISTER_ERROR_HANDLER":
      return { ...state, auth: { ...state.auth, registerErrorMessage: error } };
    case "LOGIN_ERROR_HANDLER":
      return { ...state, auth: { ...state.auth, loginErrorMessage: error } };
    case "RESET_AUTH_MODAL_ERROR_VALUES":
      return { ...state, auth: initialState.auth };
    case "PROJECT_LIST_ERROR_HANDLER":
      return { ...state, projectListErrorMessage: err };
    case "PROJECT_CREATION_ERROR_HANDLER":
      return { ...state, projectCreationErrorMessage: err };
    case "PROJECT_APPLY_ERROR_HANDLER":
      return { ...state, projectApplyErrorMessage: error };
    case "USER_PROFILE_ERROR_HANDLER":
      return { ...state, userProfileErrorMessage: error };
    case "PROJECT_EDITION_ERROR_HANDLER":
      return { ...state, projectEditionErrorMessage: error };
    case "PROJECT_DETAILS_ERROR_HANDLER":
      return { ...state, projectDetailsErrorMessage: error };
    case "SET_USER_PROFILE_EDITION_ERROR_HANDLER":
      return { ...state, userProfileEditionErrorMessage: err };
    case "ACCOUNT_ACTIVATION_ERROR_HANDLER":
      return { ...state, accountActivationErrorMessage: err };
    case "ACCOUNT_TOKEN_ERROR_HANDLER":
      return {
        ...state,
        accountTokenVerificationErrorMessage:
          error || initialState.accountTokenVerificationErrorMessage,
      };
    default:
      return state;
  }
};

export default error;
