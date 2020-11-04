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
      {chatWindow.map((window) => (
        <ChatWindow
          key={window.username}
          {...window}
          {...chat}
          getMessageValue={getMessageValue}
          sendMessage={sendMessage}
        />
      ))}
    </>
  );
};

export default Chat;
