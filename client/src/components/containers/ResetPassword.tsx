import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import ResetPassword from "../ResetPassword/ResetPassword";

const mapState = ({ auth: { resetPassword: inputs } }: State) => ({
  inputs,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitForm: () => dispatch({ type: "SEND_RESET_PASSWORD_REQUEST" }),
});

export default connect(mapState, mapDispatch)(ResetPassword);
