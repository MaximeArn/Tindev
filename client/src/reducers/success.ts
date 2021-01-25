import { SuccessState } from "../models/states";
import { SuccessAction } from "../models/actions";

const initialState: SuccessState = {
  applySuccess: false,
  registerSuccess: false,
  projectEditionSuccess: false,
  projectDeletionSuccess: false,
  userEditionSuccess: false,
  userDeletionSuccess: false,
  accountActivationSuccess: false,
  newLinkSuccess: false,
  forgotPasswordSuccess: false,
  resetPasswordSuccess: false,
  adminProjectDeletionSuccess: false,
  redirectionSuccess: false,
};

const success = (state = initialState, { type, message }: SuccessAction) => {
  const msg = message ?? false;
  switch (type) {
    case "APPLY_SUCCESS_MESSAGE":
      return { ...state, applySuccess: msg };
    case "REGISTER_SUCCESS_MESSAGE":
      return { ...state, registerSuccess: msg };
    case "PROJECT_EDITION_SUCCESS_MESSAGE":
      return { ...state, projectEditionSuccess: msg };
    case "PROJECT_DELETION_SUCCESS_MESSAGE":
      return { ...state, projectDeletionSuccess: msg };
    case "USER_EDITION_SUCCESS_MESSAGE":
      return { ...state, userEditionSuccess: msg };
    case "USER_DELETION_SUCCESS_MESSAGE":
      return { ...state, userDeletionSuccess: msg };
    case "ACCOUNT_ACTIVATION_SUCCESS_MESSAGE":
      return { ...state, accountActivationSuccess: msg };
    case "NEW_LINK_SUCCESS_MESSAGE":
      return { ...state, newLinkSuccess: msg };
    case "FORGOT_PASSWORD_SUCCESS_MESSAGE":
      return { ...state, forgotPasswordSuccess: msg };
    case "RESET_PASSWORD_SUCCESS_MESSAGE":
      return { ...state, resetPasswordSuccess: msg };
    case "ADMIN_DELETION_SUCCESS_MESSAGE":
      return { ...state, adminProjectDeletionSuccess: msg };
    case "REDIRECTION_SUCCESS_MESSAGE":
      return { ...state, redirectionSuccess: msg };
    default:
      return state;
  }
};

export default success;
