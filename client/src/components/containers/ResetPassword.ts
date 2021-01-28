import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import { withRouter } from "react-router-dom";
import ResetPassword from "../ResetPassword/ResetPassword";
import { OwnProps } from "../../models/connect";

const mapState = ({
  auth: { resetPassword: inputs },
  error: {
    newLinkVerificationErrorMessage: validityError,
    resetPasswordErrorMessage: error,
  },
  loaders: { newLinkLoader: resetPasswordLinkLoader, resetPasswordLoader },
  success: { newLinkSuccess, resetPasswordSuccess: success },
}: State) => ({
  inputs,
  validityError,
  error,
  resetPasswordLinkLoader,
  resetPasswordLoader,
  newLinkSuccess,
  success,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  {
    match: {
      params: { token },
    },
  }: OwnProps
) => ({
  verifyTokenValidity: () => dispatch({ type: "VERIFY_TOKEN_VALIDITY", token }),
  submitForm: () => dispatch({ type: "SEND_RESET_PASSWORD_REQUEST", token }),
  sendNewResetPasswordLink: (userId: string) =>
    dispatch({
      type: "SEND_NEW_LINK",
      userId,
      linkType: "resetPassword",
    }),
});

export default withRouter(connect(mapState, mapDispatch)(ResetPassword));
