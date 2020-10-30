import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import User from "../Users/UserProfile/User";

const mapState = ({
  users: {
    profile: { content },
  },
}: State) => ({
  currentContent: content,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getCurrentContent: (content: string) =>
    dispatch({ type: "SET_CURRENT_CONTENT", content }),
});

export default connect(mapState, mapDispatch)(User);
