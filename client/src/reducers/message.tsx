import { MessageAction } from "../models/actions";
import { MessageState } from "../models/states";

const initialState: MessageState = {
  messages: [],
  chatWindows: [],
};

const message = (
  state = initialState,
  { type, message, windows }: MessageAction
) => {
  switch (type) {
    case "SET_CHAT_MESSAGES":
      return {
        ...state,
        messages: [...state.messages, message],
      };
    case "SET_CHAT_WINDOWS":
      return { ...state, chatWindows: windows };
    default:
      return state;
  }
};

export default message;
