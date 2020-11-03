/** @format */

export interface ChatProps {
  chatWindow: { username: string }[];
  chat: {
    messages: string[];
    message: string;
  };
  getMessageValue: Function;
  sendMessage: Function;
}

export interface ChatWindowProps {
  username: string;
  messages: string[];
  message: string;
  getMessageValue: Function;
  sendMessage: Function;
}