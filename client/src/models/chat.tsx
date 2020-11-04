/** @format */

export interface ChatProps {
  chatWindow: { username: string; id: string }[];
  chat: {
    messages: string[];
    message: string;
  };
  getMessageValue: Function;
  sendMessage: Function;
}

export interface ChatWindowProps {
  id: string;
  username: string;
  messages: string[];
  message: string;
  getMessageValue: Function;
  sendMessage: Function;
}
