import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
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
  sendMessage,
  messages,
  closeChatWindow,
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
      .then(({ data: { to, from } }) => {
        setchatHistory(
          to
            .concat(from)
            .sort(({ date: date1 }: Messages, { date: date2 }: Messages) =>
              date1 < date2 ? -1 : 1
            )
        );
      })
      .catch((error) => console.error(error));
  }, []);

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
            !chatExpanded && closeChatWindow(id);
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
        {chatHistory &&
          messages.map(({ id, to, from, message, date }) => {
            const exists = chatHistory.find(({ _id }) => _id == id);
            const show = username == to || username == from;
            return (
              show &&
              !exists && (
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
            setMessage("");
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
