import { NavBarAction } from "../models/actions";
import { NavBarState } from "../models/states";

const initialState: NavBarState = {
  account: null,
  mobile: null,
  main: null,
};

const navbar = (
  state = initialState,
  { type, target, status }: NavBarAction
) => {
  switch (type) {
    case "SET_ACCOUNT_MENU_TARGET":
      return { ...state, account: target };
    case "SET_MOBILE_ANCHOR":
      return { ...state, mobile: status };
    default:
      return state;
  }
};

export default navbar;
