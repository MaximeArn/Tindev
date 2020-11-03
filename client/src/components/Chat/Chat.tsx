/** @format */

import React from "react";
import ChatWindow from "./ChatWindow";
import { ChatProps } from "../../models/chat";
import "./chat.scss";

const Chat = ({
  chatWindow,
  chat,
  getMessageValue,
  sendMessage,
}: ChatProps) => {
  return (
    <>
      {chatWindow.map(({ username }) => (
        <ChatWindow
          key={username}
          username={username}
          {...chat}
          getMessageValue={getMessageValue}
          sendMessage={sendMessage}
        />
      ))}
    </>
  );
};

export default Chat;
