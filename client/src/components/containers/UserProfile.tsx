import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import UserProfile from "../Users/UserProfile/UserProfile";
import { State } from "../../models/states";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";

const mapState = ({
  users: { user },
  error: { userProfileErrorMessage: error },
  loaders: { userProfileLoader: loader },
}: State) => ({
  user,
  error,
  loader,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  { match: { params } }: OwnProps
) => {
  const { username } = params;
  return {
    getUser: () => dispatch({ type: "GET_USER_PROFILE", username }),
  };
};

export default withRouter(connect(mapState, mapDispatch)(UserProfile));
