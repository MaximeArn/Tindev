/** @format */

import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
          Object.keys(history).map((key) => {
            return <p>{}</p>;
          })}
        {messages.map(({ message, date }) => {
          return (
            <>
              <p>{new Date(date).toLocaleString()}</p>
              <p>{message}</p>
            </>
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
