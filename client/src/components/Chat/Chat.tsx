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
  deleteChatWindow,
}: ChatProps) => {
  return (
    <>
      <div className="chat-window-wrapper">
        {chatWindow.map((window) => (
          <ChatWindow
            key={window.username}
            {...window}
            {...chat}
            getMessageValue={getMessageValue}
            sendMessage={sendMessage}
            deleteChatWindow={deleteChatWindow}
          />
        ))}
      </div>
    </>
  );
};

export default Chat;
