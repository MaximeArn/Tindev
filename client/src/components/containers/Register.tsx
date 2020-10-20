/** @format */

import { connect } from "react-redux";
import Register from "../Auth/Register/Register";
import { State } from "../../models/states";
import { Dispatch } from "react";
import { AnyAction } from "redux";

const mapState = (state: State) => {
  const { register } = state.auth;
  const {
    auth: { registerErrorMessage: error },
  } = state.error;
  const { registerLoader } = state.loaders;

  return { register, error, registerLoader };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitRegister: (history: any) =>
    dispatch({ type: "SUBMIT_REGISTER", history }),
  closeModal: (modalStatus: boolean) => {
    dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
    dispatch({ type: "SET_AUTH_MODAL_STATE", modalStatus });
  },
});



export default connect(mapState, mapDispatch)(Register);
