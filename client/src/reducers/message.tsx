import { MessageAction } from "../models/actions";
import { MessageState } from "../models/states";

const initialState: MessageState = {
  messages: [],
  message: "",
  chatWindow: [],
};

const message = (
  state = initialState,
  { type, message, username }: MessageAction
) => {
  switch (type) {
    case "SET_CHAT_MESSAGES":
      return { ...state, messages: [...state.messages, message] };
    case "SET_CHAT_MESSAGE":
      return { ...state, message };
    case "OPEN_CHAT_WINDOW":
      return { ...state, chatWindow: [...state.chatWindow, { username }] };
    default:
      return state;
  }
};

export default message;
