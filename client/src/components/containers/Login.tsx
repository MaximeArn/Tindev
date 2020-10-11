/** @format */

import { connect } from "react-redux";
import Login from "../Login/Login";
import { AuthenticationState } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = (state: AuthenticationState) => {
  const { login } = state.auth;
  const { loginErrorMessage: error } = state.error;
  const { loginLoader } = state.loaders;

  return { login, error, loginLoader };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitLogin: (history: any) => dispatch({ type: "SUBMIT_LOGIN", history }),
});

export default connect(mapState, mapDispatch)(Login);
