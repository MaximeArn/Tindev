/** @format */

export interface ChatProps {
  chatWindow: { username: string; id: string }[];
  chat: {
    messages: Messages[];
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
  messages: Messages[];
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

export interface Messages {
  to: string;
  from?: string;
  message: string;
  date: Date;
}

export interface ChatWindow {
  username: string;
}

export interface SocketServerResponse {
  to: string;
  from: string;
  message: string;
  date: Date;
}
