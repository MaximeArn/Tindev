import { SuccessState } from "../models/states";
import { SuccessAction } from "../models/actions";
const initialState: SuccessState = {
  applySuccess: false,
  registerSuccess: false,
};
const success = (state = initialState, { type, message }: SuccessAction) => {
  switch (type) {
    case "APPLY_SUCCESS_MESSAGE":
      const msg = message ? message : false;
      return { ...state, applySuccess: msg };
    case "REGISTER_SUCCESS_MESSAGE":
      return { ...state, registerSuccess: message };
    case "RESET_REGISTER_SUCCESS_MESSAGE":
      return { ...state, registerSuccess: false };
    default:
      return state;
  }
};

export default success;
