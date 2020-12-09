import { MessageAction } from "../models/actions";
import { MessageState } from "../models/states";

const initialState: MessageState = {
  messages: {},
  chatWindows: [],
};

const message = (
  state = initialState,
  { type, message, windows }: MessageAction
) => {
  switch (type) {
    case "SET_CHAT_MESSAGES":
      const { to } = message;
      return {
        ...state,
        messages: {
          ...state.messages,
          [to]: [...state.messages[to], message],
        },
      };
    case "SET_CHAT_WINDOWS":
      return { ...state, chatWindows: windows };
    default:
      return state;
  }
};

export default message;
