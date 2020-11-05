/** @format */

import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { History } from "../../models/chat";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Messages } from "../../models/chat";
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
  // message,
  messages,
  deleteChatWindow,
}: ChatWindowProps) => {
  const [chatHistory, setchatHistory] = useState<Messages[] | null>(null);
  const [chatExpanded, setChatExpanded] = useState(true);
  const [message, setMessage] = useState("");
  const chatHeader = useRef(null);
  const messagesArea = useRef<HTMLDivElement>(null);
  const scrollDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .post("/users/messageHistory", { toId: id })
      .then(({ data: chatHistory }) => {
        setchatHistory(
          chatHistory.to
            .concat(chatHistory.from)
            .sort((el1: Messages, el2: Messages) =>
              el1.date < el2.date ? -1 : 1
            )
        );
      })
      .catch((error) => console.error(error));
  }, []);

  chatHistory && console.log(chatHistory);
  useEffect(() => {
    if (scrollDiv.current && chatExpanded) {
      scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatExpanded, chatHistory]);

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
          chatHistory.map(({ to: { name }, date, message }: any) => (
            <span
              key={idGenerator()}
              className={username === name ? "message to" : "message from"}
              title={new Date(date).toLocaleString()}
            >
              {message}
            </span>
          ))}
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
        <div className="scrollDiv" ref={scrollDiv}></div>
      </div>
      <div className="chatZone-footer">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(username, id, message);
          }}
        >
          <input
            type="text"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
