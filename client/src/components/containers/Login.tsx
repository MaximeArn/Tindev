/** @format */

import { connect } from "react-redux";
import Login from "../Auth/Login/Login";
import { State } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = (state: State) => {
  const { login } = state.auth;
  const { loginErrorMessage: error } = state.error;
  const { loginLoader } = state.loaders;

  return { login, error, loginLoader };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitLogin: (history: any) => dispatch({ type: "SUBMIT_LOGIN", history }),
  closeModal: (modalStatus: boolean) =>
    dispatch({ type: "SET_AUTH_MODAL_STATE", modalStatus }),
});

export default connect(mapState, mapDispatch)(Login);
