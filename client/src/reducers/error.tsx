import { ErrorAction } from "../models/actions";
import { AuthenticationError } from "../models/states";

const initialState: AuthenticationError = {
  registerErrorMessage: "",
};

const error = (state = initialState, { type }: ErrorAction) => {
  switch (type) {
    default:
      return state;
  }
};

export default error;
