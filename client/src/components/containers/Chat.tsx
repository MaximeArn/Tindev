import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import Chat from "../Chat/Chat";

const mapState = ({ message: { messages, chatWindows } }: State) => ({
  messages,
  chatWindows,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  sendMessage: (name: string, id: string, message: string) =>
    dispatch({ type: "SEND_CHAT_MESSAGE", name, id, message }),
  closeChatWindow: (id: string) => dispatch({ type: "CLOSE_CHAT_WINDOW", id }),
});

export default connect(mapState, mapDispatch)(Chat);
