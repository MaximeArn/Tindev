/** @format */

import { MessageAction } from "../models/actions";
import { MessageState } from "../models/states";
import windowFilter from "../utils/removeChatWindow";

const initialState: MessageState = {
  messages: [],
  message: "",
  chatWindow: [],
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
  const msg = message ? message : "";
  switch (type) {
    case "SET_CHAT_MESSAGES":
      return { ...state, messages: [...state.messages, { message, date }] };
    case "SET_CHAT_MESSAGE":
      return { ...state, message: msg };
    case "OPEN_CHAT_WINDOW":
      return { ...state, chatWindow: [...state.chatWindow, { username, id }] };
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
