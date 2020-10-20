/** @format */

import { connect } from "react-redux";
import Register from "../Auth/Register/Register";
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
  closeModal: (modalStatus: boolean) =>
    dispatch({ type: "SET_AUTH_MODAL_STATE", modalStatus }),
});

export default connect(mapState, mapDispatch)(Register);
