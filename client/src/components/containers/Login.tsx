/** @format */

import { connect } from "react-redux";
import Login from "../Login/Login";
import { AuthenticationState } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = (state: AuthenticationState) => {
  const { login } = state.auth;
  const { loginErrorMessage: error } = state.error;

  return { login, error };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitLogin: () => dispatch({ type: "SUBMIT_LOGIN" }),
});

export default connect(mapState, mapDispatch)(Login);
