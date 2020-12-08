/** @format */

import React from "react";
import ChatWindow from "./ChatWindow";
import { ChatProps } from "../../models/chat";
import "./chat.scss";

const Chat = ({
  chatWindows,
  messages,
  sendMessage,
  deleteChatWindow,
}: ChatProps) => {
  return (
    <>
      <div className="chat-window-wrapper">
        {chatWindows.length > 0 &&
          chatWindows.map((window) => (
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
