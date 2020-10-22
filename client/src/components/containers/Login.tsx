/** @format */

import { connect } from "react-redux";
import Login from "../Auth/Login/Login";
import { State } from "../../models/states";
import { AuthModalSwapping } from "../../models/modal";
import { AnyAction, Dispatch } from "redux";

const mapState = (state: State) => {
  const { login } = state.auth;
  const {
    auth: { loginErrorMessage: error },
  } = state.error;
  const { loginLoader } = state.loaders;

  return { login, error, loginLoader };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitLogin: (history: any) => dispatch({ type: "SUBMIT_LOGIN", history }),
  closeModal: (modalStatus: boolean) => {
    dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
    dispatch({
      type: "SET_AUTH_MODAL_STATUS",
      modal: "login",
      modalStatus,
    });
  },
  swapModal: ({ modal, modal2 }: AuthModalSwapping) =>
    dispatch({ type: "SWAP_AUTH_MODAL", modal, modal2, modalStatus: false }),
});

export default connect(mapState, mapDispatch)(Login);
