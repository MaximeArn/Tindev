import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import AccountVerification from "../AccountVerification/Verification";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";
import { State } from "../../models/states";

const mapState = ({
  loaders: { accountActivationLoader, activationLinkLoader },
  success: {
    activationLinkSuccess,
    accountActivationSuccess: activationSuccess,
  },
  error: {
    accountTokenVerificationErrorMessage,
    accountActivationErrorMessage,
  },
}: State) => ({
  accountActivationLoader,
  activationLinkLoader,
  activationLinkSuccess,
  activationSuccess,
  accountTokenVerificationErrorMessage,
  accountActivationErrorMessage,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  { match: { params } }: OwnProps
) => {
  const { token } = params;
  return {
    checkTokenValidity: () =>
      dispatch({ type: "VERIFY_ACCOUNT_TOKEN_VALIDITY", token }),
    activateAccount: () => dispatch({ type: "ACCOUNT_VERIFICATION", token }),
    sendActivationLink: (userId: string) =>
      dispatch({
        type: "SEND_ACCOUNT_ACTIVATION_LINK",
        userId,
        linkType: "accountActivation",
      }),
  };
};

export default withRouter(connect(mapState, mapDispatch)(AccountVerification));
