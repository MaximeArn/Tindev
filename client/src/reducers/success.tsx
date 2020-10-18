import { SuccessState } from "../models/states";
import { SuccessAction } from "../models/actions";
const initialState: SuccessState = {
  applySuccess: false,
};
const success = (state = initialState, { type, message }: SuccessAction) => {
  switch (type) {
    case "APPLY_SUCCESS_MESSAGE":
      return { ...state, applySuccess: message };
    case "RESET_SUCCESS_MESSAGE":
      return { ...state, applySuccess: false };
    default:
      return state;
  }
};

export default success;