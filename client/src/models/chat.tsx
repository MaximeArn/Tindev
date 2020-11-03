export interface ChatProps {
  chatWindow: { username: string }[];
  chat: {
    messages: string[];
    message: string;
  };
  getMessageValue: Function;
  sendMessage: Function;
}
