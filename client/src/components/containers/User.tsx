import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import User from "../Users/UserProfile/User";

const mapState = ({
  users: {
    profile: { content },
    user,
  },
}: State) => {
  const infos = ["about", "technos", "experience"].map((name: string) => ({
    name,
    value: (user && user[name]) || null,
  }));

  return {
    currentContent: content,
    infos,
  };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => {
  return {
    getCurrentContent: (content: Function) => {
      dispatch({ type: "SET_CURRENT_CONTENT", content });
    },
    setSelectedStatus: (listName: string) =>
      dispatch({ type: "SET_SELECTED_STATUS", listName }),
    openChatWindow: (username: string, id: string) =>
      dispatch({ type: "OPEN_CHAT_WINDOW", username, id }),
  };
};

export default connect(mapState, mapDispatch)(User);
