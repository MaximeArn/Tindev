export interface ChatProps {
  chatWindows: ChatWindow[];
  messages: any;
  username: string;
  sendMessage: Function;
  closeChatWindow: Function;
}

export interface ChatWindowProps {
  id: string;
  username: string;
  messages: SocketServerResponse[];
  sendMessage: Function;
  closeChatWindow: Function;
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
  _id: string;
  to: string;
  from?: string;
  message: string;
  date: Date;
}

export interface ChatWindow {
  id: string;
  username: string;
}

export interface SocketServerResponse {
  id: string;
  to: string;
  from: string;
  fromId?: string;
  message: string;
  date: Date;
}
