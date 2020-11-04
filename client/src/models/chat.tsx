/** @format */

export interface ChatProps {
  chatWindow: { username: string; id: string }[];
  chat: {
    messages: { message: string; date: Date }[];
    message: string;
  };
  getMessageValue: Function;
  sendMessage: Function;
  deleteChatWindow: Function;
  getMessageHistory: Function;
  chatHistory: History;
}

export interface ChatWindowProps {
  id: string;
  username: string;
  messages: { message: string; date: Date }[];
  message: string;
  getMessageValue: Function;
  sendMessage: Function;
  deleteChatWindow: Function;
}

export interface History {
  from: Message[] | [];
  to: Message[] | [];
}

export interface Message {
  username: string;
  date: Date;
  message: string;
}
