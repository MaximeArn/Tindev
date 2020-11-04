/** @format */

import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import Chat from "../Chat/Chat";

const mapState = ({
  message: { message, messages, chatWindow, chatHistory },
}: State) => ({
  chat: {
    message,
    messages,
  },
  chatWindow,
  chatHistory,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getMessageValue: (message: string) =>
    dispatch({ type: "SET_CHAT_MESSAGE", message }),
  sendMessage: (name: string, id: string) =>
    dispatch({ type: "SEND_CHAT_MESSAGE", name, id }),
  deleteChatWindow: (usernameToDelete: string) =>
    dispatch({ type: "DELETE_CHAT_WINDOW", usernameToDelete }),
  getMessageHistory: (toId: string) =>
    dispatch({ type: "GET_MESSAGE_HISTORY", toId }),
});

export default connect(mapState, mapDispatch)(Chat);
