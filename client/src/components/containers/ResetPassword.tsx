import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import { withRouter } from "react-router-dom";
import ResetPassword from "../ResetPassword/ResetPassword";
import { OwnProps } from "../../models/connect";

const mapState = ({ auth: { resetPassword: inputs } }: State) => ({
  inputs,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  {
    match: {
      params: { token },
    },
  }: OwnProps
) => ({
  submitForm: () => dispatch({ type: "SEND_RESET_PASSWORD_REQUEST", token }),
});

export default withRouter(connect(mapState, mapDispatch)(ResetPassword));
