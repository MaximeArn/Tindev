/** @format */

import React from "react";
import ChatWindow from "./ChatWindow";
import { ChatProps } from "../../models/chat";
import "./chat.scss";

const Chat = ({
  chatWindow,
  messages,
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
            messages={messages}
            sendMessage={sendMessage}
            deleteChatWindow={deleteChatWindow}
          />
        ))}
      </div>
    </>
  );
};

export default Chat;
