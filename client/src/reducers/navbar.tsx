import { NavBarAction } from "../models/actions";
import { NavBarState } from "../models/states";

const initialState: NavBarState = {
  account: null,
  mobile: null,
  main: null,
};

const navbar = (state = initialState, { type, status }: NavBarAction) => {
  switch (type) {
    case "SET_ACCOUNT_MENU":
      return { ...state, account: status };
    case "SET_MOBILE_MENU":
      return { ...state, mobile: status };
    case "SET_MAIN_MENU":
      return { ...state, main: status };
    default:
      return state;
  }
};

export default navbar;
