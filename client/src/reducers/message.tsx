import { MessageAction } from "../models/actions";

const initialState = {
  messages: [],
};

const message = (state = initialState, { type, message }: MessageAction) => {
  switch (type) {
    case "SET_CHAT_MESSAGE":
      return { ...state, messages: [...state.messages, message] };
    default:
      return state;
  }
};

export default message;
