/** @format */

import { connect } from "react-redux";
import Register from "../Auth/Register/Register";
import { State } from "../../models/states";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { AuthModalSwapping } from "../../models/modal";

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
  closeModal: (modalStatus: boolean, modal2?: string) => {
    dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
    dispatch({
      type: "SET_AUTH_MODAL_STATUS",
      modal: "register",
      modalStatus,
      modal2,
    });
  },
  swapModal: ({ modal, modal2 }: AuthModalSwapping) =>
    dispatch({ type: "SWAP_AUTH_MODAL", modal, modal2, modalStatus: false }),
});

export default connect(mapState, mapDispatch)(Register);
