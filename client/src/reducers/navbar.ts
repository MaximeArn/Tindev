import { NavBarAction } from "../models/actions";
import { NavBarState } from "../models/states";

const initialState: NavBarState = {
  account: null,
  mobile: null,
  main: null,
  hasBeenSuspended: {
    status: false,
  },
  isTokenInvalid: {
    status: false,
  },
};

const navbar = (state = initialState, { type, status, message }: NavBarAction) => {
  switch (type) {
    case "SET_ACCOUNT_MENU":
      return { ...state, account: status };
    case "SET_MOBILE_MENU":
      return { ...state, mobile: status };
    case "SET_MAIN_MENU":
      return { ...state, main: status };
    case "SEND_ACCOUNT_SUSPENSION_REQUEST":
      return { ...state, hasBeenSuspended: { status: true, message } };
    case "INVALID_TOKEN":
      return { ...state, isTokenInvalid: { status: true, message } };
    default:
      return state;
  }
};

export default navbar;
