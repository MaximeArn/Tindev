import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import AccountVerification from "../Account/Verification";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";
import { State } from "../../models/states";

const mapState = ({
  loaders: { userAccountActivationLoader: loader },
  success: { accountActivationSuccess: success },
  error: { accountActivationErrorMessage: error },
}: State) => ({
  loader,
  success,
  error,
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
  };
};

export default withRouter(connect(mapState, mapDispatch)(AccountVerification));
