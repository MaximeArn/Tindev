/** @format */

import { connect } from "react-redux";
import Register from "../Register/Register";
import { AuthenticationState } from "../../models/states";
import { Dispatch } from "react";
import { AnyAction } from "redux";

const mapState = ({ auth: { register } }: AuthenticationState) => ({
  register,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitRegister: () => dispatch({ type: "SUBMIT_REGISTER" }),
});

export default connect(mapState, mapDispatch)(Register);
