/** @format */

import { connect } from "react-redux";
import Login from "../Login/Login";
import { AuthenticationState } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = ({ auth: { login } }: AuthenticationState) => ({ login });

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitLogin: () => dispatch({ type: "SUBMIT_LOGIN" }),
});

export default connect(mapState, mapDispatch)(Login);
