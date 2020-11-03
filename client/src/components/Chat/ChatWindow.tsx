/** @format */

import React, { useState, useRef } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ChatWindowProps } from "../../models/chat";
import "./chat.scss";

const Chat = ({
  username,
  getMessageValue,
  sendMessage,
  message,
  messages,
}: ChatWindowProps) => {
  const [chat, setChat] = useState(true);
  const [chatExpanded, setChatExpanded] = useState(false);
  const chatHeader = useRef(null);
  return (
    <div className={chatExpanded ? "chatZone expanded" : "chatZone"}>
      <div
        ref={chatHeader}
        className="chatZone-header"
        onClick={(event) => {
          chatExpanded
            ? setChatExpanded(!chatExpanded)
            : event.target === chatHeader.current &&
              setChatExpanded(!chatExpanded);
        }}
      >
        <p>{username}</p>
        <button
          className="closeIcon"
          onClick={() => {
            setChat(false);
          }}
        >
          {chatExpanded ? <ExpandMoreIcon /> : <CloseIcon />}
        </button>
      </div>
      <div className="chatZone-content"></div>
      <div className="chatZone-footer">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
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

export default Chat;
