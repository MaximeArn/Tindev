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
  console.log("CHAT COMPONENT CALLED");
  console.log("CHAT WINDOW IN CHAT COMPONENT : ", chatWindow);
  return (
    <>
      <div className="chat-window-wrapper">
        {chatWindow.length &&
          chatWindow.map((window) => {
            console.log(chatWindow.length);

            return (
              <ChatWindow
                key={window.username}
                {...window}
                messages={messages}
                sendMessage={sendMessage}
                deleteChatWindow={deleteChatWindow}
              />
            );
          })}
      </div>
    </>
  );
};

export default Chat;
