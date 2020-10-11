/** @format */

import { connect } from "react-redux";
import Login from "../Login/Login";
import { State } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = (state: State) => {
  const { login } = state.auth;
  const { loginErrorMessage: error } = state.error;
  return { login, error };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitLogin: (history: any) => dispatch({ type: "SUBMIT_LOGIN", history }),
});

export default connect(mapState, mapDispatch)(Login);
