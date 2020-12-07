import { MessageAction } from "../models/actions";
import { MessageState } from "../models/states";
import windowFilter from "../utils/removeChatWindow";

const initialState: MessageState = {
  messages: [],
  chatWindow: [],
};

const message = (
  state = initialState,
  { type, message, username, usernameToDelete, id }: MessageAction
) => {
  switch (type) {
    case "SET_CHAT_MESSAGES":
      return {
        ...state,
        messages: [...state.messages, message],
      };
    case "OPEN_CHAT_WINDOW":
      const found = state.chatWindow.find(
        ({ username: user }) => username == user
      );
      return !found
        ? { ...state, chatWindow: [...state.chatWindow, { username, id }] }
        : state;
    case "DELETE_CHAT_WINDOW":
      return {
        ...state,
        chatWindow: windowFilter([...state.chatWindow], usernameToDelete),
      };
    default:
      return state;
  }
};

export default message;
