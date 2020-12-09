import { MessageAction } from "../models/actions";
import { MessageState } from "../models/states";
import windowFilter from "../utils/removeChatWindow";

const initialState: MessageState = {
  messages: [],
  chatWindows: [],
};

const message = (
  state = initialState,
  { type, message, usernameToDelete, windows }: MessageAction
) => {
  switch (type) {
    case "SET_CHAT_MESSAGES":
      return {
        ...state,
        messages: [...state.messages, message],
      };
    case "SET_CHAT_WINDOWS":
      return { ...state, chatWindows: windows };
    case "DELETE_CHAT_WINDOW":
      return {
        ...state,
        chatWindows: windowFilter([...state.chatWindows], usernameToDelete),
      };
    default:
      return state;
  }
};

export default message;
