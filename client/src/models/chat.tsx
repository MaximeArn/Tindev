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
  chatHistory: {
    from: [{ username: string; date: Date; message: string }] | [];
    to: [{ username: string; date: Date; message: string }] | [];
  };
}

export interface ChatWindowProps {
  id: string;
  username: string;
  messages: { message: string; date: Date }[];
  message: string;
  getMessageValue: Function;
  sendMessage: Function;
  deleteChatWindow: Function;
  getMessageHistory: Function;
  history: {
    from: [{ username: string; date: Date; message: string }];
    to: [{ username: string; date: Date; message: string }];
  };
}
