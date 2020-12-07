import { SuccessState } from "../models/states";
import { SuccessAction } from "../models/actions";
const initialState: SuccessState = {
  applySuccess: false,
  registerSuccess: false,
  projectEditionSuccess: false,
  projectDeletionSuccess: false,
  userEditionSuccess: false,
  userDeletionSuccess: false,
};
const success = (state = initialState, { type, message }: SuccessAction) => {
  const msg = message ? message : false;
  switch (type) {
    case "APPLY_SUCCESS_MESSAGE":
      return { ...state, applySuccess: msg };
    case "REGISTER_SUCCESS_MESSAGE":
      return { ...state, registerSuccess: message };
    case "RESET_REGISTER_SUCCESS_MESSAGE":
      return { ...state, registerSuccess: false };
    case "PROJECT_EDITION_SUCCESS_MESSAGE":
      return { ...state, projectEditionSuccess: msg };
    case "PROJECT_DELETION_SUCCESS_MESSAGE":
      return { ...state, projectDeletionSuccess: msg };
    case "USER_EDITION_SUCCESS_MESSAGE":
      return { ...state, userEditionSuccess: msg };
    case "USER_DELETION_SUCCESS_MESSAGE":
      return { ...state, userDeletionSuccess: message };
    default:
      return state;
  }
};

export default success;
