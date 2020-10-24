import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import UserProfile from "../Users/UserProfile/UserProfile";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";

const mapDispatch = (dispatch: Dispatch<AnyAction>, ownProps: OwnProps) => {
  console.log(ownProps);
  return {
    getUser: () => {},
  };
};

export default withRouter(connect(null, mapDispatch)(UserProfile));
