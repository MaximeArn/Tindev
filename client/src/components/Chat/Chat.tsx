import React from "react";
import ChatWindows from "./ChatWindow";
import { ChatProps, SocketServerResponse } from "../../models/chat";
import "./chat.scss";

const Chat = ({
  chatWindows,
  messages,
  username,
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
              messages={messages[window.username]
                .concat(
                  messages[username].filter(
                    ({ from }: SocketServerResponse) => from === window.username
                  )
                )
                .sort(
                  (
                    { date: date1 }: SocketServerResponse,
                    { date: date2 }: SocketServerResponse
                  ) => (date1 > date2 ? -1 : 1)
                )}
              sendMessage={sendMessage}
              closeChatWindow={closeChatWindow}
            />
          ))}
      </div>
    </>
  );
};

export default Chat;
