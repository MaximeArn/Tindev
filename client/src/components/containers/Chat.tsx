import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import Chat from "../Chat/Chat";

const mapState = ({ message: { message, messages } }: State) => ({
  message,
  messages,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getMessageValue: (message: string) =>
    dispatch({ type: "SET_CHAT_MESSAGE", message }),
  sendMessage: () => dispatch({ type: "SEND_CHAT_MESSAGE" }),
});

export default connect(mapState, mapDispatch)(Chat);
