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
  const { registerSuccess: success } = state.success;

  return { login, error, loginLoader, success };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitLogin: () => dispatch({ type: "SUBMIT_LOGIN" }),
  closeModal: (modalStatus: boolean) => {
    dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
    dispatch({
      type: "SET_AUTH_MODAL_STATUS",
      modal: "login",
      modalStatus,
    });
  },
  swapModal: ({ modal, modal2 }: AuthModalSwapping) => {
    dispatch({ type: "SWAP_AUTH_MODAL", modal, modal2, modalStatus: false });
    dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
  },
});

export default connect(mapState, mapDispatch)(Login);
