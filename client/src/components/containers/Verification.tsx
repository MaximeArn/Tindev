import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import AccountVerification from "../Account/Verification";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  { match: { params } }: OwnProps
) => {
  const { token } = params;
  return { activateAccount: () => dispatch({ type: "ACCOUNT_VERIFICATION" }) };
};

export default withRouter(connect(null, mapDispatch)(AccountVerification));
