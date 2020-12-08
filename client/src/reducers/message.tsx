import { MessageAction } from "../models/actions";
import { MessageState } from "../models/states";
import windowFilter from "../utils/removeChatWindow";

const initialState: MessageState = {
  messages: [],
  chatWindows: [],
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
