/** @format */

import { connect } from "react-redux";
import Register from "../Auth/Register/Register";
import { State } from "../../models/states";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { AuthModalSwapping } from "../../models/modal";

const mapState = (state: State) => {
  const { register } = state.auth;
  const { registerLoader } = state.loaders;

  return { register, registerLoader };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitRegister: () => dispatch({ type: "SUBMIT_REGISTER" }),
  closeModal: (modalStatus: boolean) => {
    dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
    dispatch({
      type: "SET_AUTH_MODAL_STATUS",
      modal: "register",
      modalStatus,
    });
  },
  swapModal: ({ modal, modal2 }: AuthModalSwapping) => {
    dispatch({ type: "SWAP_AUTH_MODAL", modal, modal2, modalStatus: false }),
      dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
  },
});

export default connect(mapState, mapDispatch)(Register);
