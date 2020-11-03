/** @format */

import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import Chat from "../Chat/Chat";

const mapState = ({ message: { message, messages, chatWindow } }: State) => ({
  chat: {
    message,
    messages,
  },
  chatWindow,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getMessageValue: (message: string) =>
    dispatch({ type: "SET_CHAT_MESSAGE", message }),
  sendMessage: () => dispatch({ type: "SEND_CHAT_MESSAGE" }),
  deleteChatWindow: (usernameToDelete: string) =>
    dispatch({ type: "DELETE_CHAT_WINDOW", usernameToDelete }),
});

export default connect(mapState, mapDispatch)(Chat);
