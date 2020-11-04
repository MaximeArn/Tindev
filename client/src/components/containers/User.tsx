import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import User from "../Users/UserProfile/User";

const mapState = ({
  users: {
    profile: { content },
    list,
  },
}: State) => ({
  currentContent: content,
  list,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getCurrentContent: (content: Function) => {
    dispatch({ type: "SET_CURRENT_CONTENT", content });
  },
  setSelectedStatus: (listName: string) =>
    dispatch({ type: "SET_SELECTED_STATUS", listName }),
  openChatWindow: (username: string, id: string) =>
    dispatch({ type: "OPEN_CHAT_WINDOW", username, id }),
});

export default connect(mapState, mapDispatch)(User);
