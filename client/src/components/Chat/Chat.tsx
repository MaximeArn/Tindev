import React from "react";
import ChatWindows from "./ChatWindow";
import { ChatProps } from "../../models/chat";
import "./chat.scss";

const Chat = ({
  chatWindows,
  messages,
  sendMessage,
  closeChatWindow,
}: ChatProps) => {
  return (
    <>
      <div className="chat-window-wrapper">
        {chatWindows.length > 0 &&
          chatWindows.map((window: any) => (
            <ChatWindows
              key={window.username}
              {...window}
              messages={messages[window.username]}
              sendMessage={sendMessage}
              closeChatWindow={closeChatWindow}
            />
          ))}
      </div>
    </>
  );
};

export default Chat;
