import { AccountTokenAction } from "../models/actions";
import { AccountTokenState } from "../models/states";

const initialState: AccountTokenState = {
  validity: null,
};

const token = (
  state = initialState,
  { type, validity }: AccountTokenAction
) => {
  switch (type) {
    case "SET_ACCOUNT_TOKEN_VALIDITY":
      return { ...state, validity };
    default:
      return state;
  }
};

export default token;
