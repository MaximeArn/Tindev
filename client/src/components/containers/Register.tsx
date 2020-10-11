/** @format */

import { connect } from "react-redux";
import Register from "../Register/Register";
import { State } from "../../models/states";
import { Dispatch } from "react";
import { AnyAction } from "redux";

const mapState = (state: State) => {
  const { register } = state.auth;
  const { registerErrorMessage } = state.error;

  return { register, error: registerErrorMessage };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitRegister: (history: any) =>
    dispatch({ type: "SUBMIT_REGISTER", history }),
});

export default connect(mapState, mapDispatch)(Register);
