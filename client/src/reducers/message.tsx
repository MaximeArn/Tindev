import { MessageAction } from "../models/actions";
import { MessageState } from "../models/states";

const initialState: MessageState = {
  messages: [],
  message: "",
};

const message = (state = initialState, { type, message }: MessageAction) => {
  switch (type) {
    case "SET_CHAT_MESSAGES":
      return { ...state, messages: [...state.messages, message] };
    case "SET_MESSAGE":
      return { ...state, message };
    default:
      return state;
  }
};

export default message;
