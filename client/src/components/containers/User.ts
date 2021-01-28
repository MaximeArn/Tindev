import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import User from "../Users/UserProfile/User";

const mapState = ({ users: { user } }: State) => {
  const infos = ["about", "technos", "experience"].map((name: string) => ({
    name,
    value: user[name] || null,
  }));

  return {
    ...user,
    infos,
  };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  openChatWindow: (username: string, id: string) =>
    dispatch({ type: "OPEN_CHAT_WINDOW", username, id }),
});

export default connect(mapState, mapDispatch)(User);
