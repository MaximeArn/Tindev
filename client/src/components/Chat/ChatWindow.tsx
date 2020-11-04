/** @format */

import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Message } from "../../models/chat";
import axios from "axios";
import { ChatWindowProps } from "../../models/chat";
import { url } from "../../environments/api";
import idGenerator from "../../utils/randomIdGenerator";
import "./chat.scss";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const ChatWindow = ({
  username,
  id,
  getMessageValue,
  sendMessage,
  message,
  messages,
  deleteChatWindow,
}: ChatWindowProps) => {
  const [chatHistory, setchatHistory] = useState<History | null>(null);
  const [chatExpanded, setChatExpanded] = useState(false);
  const chatHeader = useRef(null);
  const messagesArea = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .post("/users/messageHistory", { toId: id })
      .then(({ data: chatHistory }) => setchatHistory(chatHistory))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (messagesArea.current) {
      messagesArea.current.scrollTop = messagesArea.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (messagesArea.current) {
      messagesArea.current.scrollTop = messagesArea.current.scrollHeight;
    }
  }, [chatExpanded]);

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
      <div ref={messagesArea} className="chatZone-content">
        {chatHistory &&
          Object.entries(chatHistory).map(([key, value]) => {
            return value.map(({ date, message }: Message) => (
              <span
                key={idGenerator()}
                className={`message ${key}`}
                title={new Date(date).toLocaleDateString()}
              >
                {message}
              </span>
            ));
          })}
        {messages.map(({ to, from, message, date }) => {
          const show = username == to || username == from;
          return (
            show && (
              <div
                key={idGenerator()}
                className={username == to ? "message to" : "message from"}
              >
                <p title={new Date(date).toLocaleString()}>{message}</p>
              </div>
            )
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
