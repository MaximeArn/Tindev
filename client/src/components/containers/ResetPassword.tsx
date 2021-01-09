import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import { withRouter } from "react-router-dom";
import ResetPassword from "../ResetPassword/ResetPassword";
import { OwnProps } from "../../models/connect";

const mapState = ({
  auth: { resetPassword: inputs },
  error: { accountTokenVerificationErrorMessage: error },
}: State) => ({
  inputs,
  error,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  {
    match: {
      params: { token },
    },
  }: OwnProps
) => ({
  verifyTokenValidity: () =>
    dispatch({ type: "VERIFY_ACCOUNT_TOKEN_VALIDITY", token }),
  submitForm: () => dispatch({ type: "SEND_RESET_PASSWORD_REQUEST", token }),
  sendNewResetPasswordLink: (userId: string) =>
    dispatch({ type: "SEND_ACCOUNT_ACTIVATION_LINK", userId }),
});

export default withRouter(connect(mapState, mapDispatch)(ResetPassword));
