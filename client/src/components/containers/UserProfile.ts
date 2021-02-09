import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import UserProfile from "../Users/UserProfile/UserProfile";
import { State } from "../../models/states";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";

const mapState = ({
  auth: {
    user: { role },
  },
  users: { user },
  loaders: { userProfileLoader: loader },
}: State) => ({
  admin: role === "Admin",
  user,
  loader,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  { match: { params } }: OwnProps
) => {
  const { username } = params;
  return {
    getUser: () => {
      dispatch({ type: "GET_USER_PROFILE", username });
    },
    openChatWindow: (username: string, id: string) =>
      dispatch({ type: "OPEN_CHAT_WINDOW", username, id }),
  };
};

export default withRouter(connect(mapState, mapDispatch)(UserProfile));
