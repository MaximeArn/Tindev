/** @format */

import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import Chat from "../Chat/Chat";

const mapState = ({ message: { messages, chatWindow } }: State) => ({
  messages,
  chatWindow,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  sendMessage: (name: string, id: string, message: string) =>
    dispatch({ type: "SEND_CHAT_MESSAGE", name, id, message }),
  deleteChatWindow: (usernameToDelete: string) =>
    dispatch({ type: "DELETE_CHAT_WINDOW", usernameToDelete }),
});

export default connect(mapState, mapDispatch)(Chat);
