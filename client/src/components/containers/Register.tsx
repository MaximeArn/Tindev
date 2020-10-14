/** @format */

import { connect } from "react-redux";
import Register from "../Register/Register";
import { State } from "../../models/states";
import { Dispatch } from "react";
import { AnyAction } from "redux";

const mapState = (state: State) => {
  const { register } = state.auth;
  const { registerErrorMessage } = state.error;
  const { registerLoader } = state.loaders;

  return { register, error: registerErrorMessage, registerLoader };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitRegister: (history: any) =>
    dispatch({ type: "SUBMIT_REGISTER", history }),
  closeModal: () => dispatch({ type: "SET_MODAL_STATE" }),
});

export default connect(mapState, mapDispatch)(Register);
