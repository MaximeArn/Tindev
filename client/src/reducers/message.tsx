/** @format */

import { MessageAction } from "../models/actions";
import { MessageState } from "../models/states";
import windowFilter from "../utils/removeChatWindow";

const initialState: MessageState = {
  messages: [],
  message: "",
  chatWindow: [],
  chatHistory: {
    from: [],
    to: [],
  },
};

const message = (
  state = initialState,
  {
    type,
    message,
    date,
    username,
    usernameToDelete,
    id,
    chatHistory,
  }: MessageAction
) => {
  switch (type) {
    case "SET_CHAT_MESSAGES":
      return { ...state, messages: [...state.messages, { message, date }] };
    case "SET_CHAT_MESSAGE":
      return { ...state, message };
    case "OPEN_CHAT_WINDOW":
      return { ...state, chatWindow: [...state.chatWindow, { username, id }] };
    case "DELETE_CHAT_WINDOW":
      return {
        ...state,
        chatWindow: windowFilter([...state.chatWindow], usernameToDelete),
      };
    case "SET_MESSAGE_HISTORY":
      return { ...state, chatHistory };
    default:
      return state;
  }
};

export default message;
