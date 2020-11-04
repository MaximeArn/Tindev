/** @format */

import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Message } from "../../models/chat";
import { ChatWindowProps } from "../../models/chat";
import "./chat.scss";

const ChatWindow = ({
  username,
  id,
  getMessageValue,
  sendMessage,
  history,
  message,
  messages,
  deleteChatWindow,
  getMessageHistory,
}: ChatWindowProps) => {
  useEffect(() => {
    getMessageHistory(id);
  }, []);

  const [chatExpanded, setChatExpanded] = useState(false);
  const chatHeader = useRef(null);
  return (
    <div className={chatExpanded ? "chatZone expanded" : "chatZone"}>
      <div
        ref={chatHeader}
        className="chatZone-header"
        onClick={({ target }) => {
          chatExpanded
            ? setChatExpanded(!chatExpanded)
            : target === chatHeader.current && setChatExpanded(!chatExpanded);
        }}
      >
        <p>{username}</p>
        <button
          className="closeIcon"
          onClick={() => {
            !chatExpanded && deleteChatWindow(username);
          }}
        >
          {chatExpanded ? <ExpandMoreIcon /> : <CloseIcon />}
        </button>
      </div>
      <div className="chatZone-content">
        {history &&
          Object.entries(history).map(([key, value]) => {
            return value.map(({ date, message }: Message) => (
              <span
                className={`message ${key}`}
                title={new Date(date).toLocaleDateString()}
              >
                {message}
              </span>
            ));
          })}
        {messages.map(({ message, date }) => {
          return (
            <div className="message from">
              <p title={new Date(date).toLocaleString()}>{message}</p>
            </div>
          );
        })}
      </div>
      <div className="chatZone-footer">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(username, id);
          }}
        >
          <input
            type="text"
            value={message}
            onChange={({ target }) => getMessageValue(target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
