/** @format */

import React, { useState, useRef } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatWindow from "./ChatWindow";
import { ChatProps } from "../../models/chat";
import "./chat.scss";

const Chat = ({
  chatWindow,
  chat,
  getMessageValue,
  sendMessage,
}: ChatProps) => {
  return (
    <>
      {chatWindow.map(({ username }) => (
        <ChatWindow
          username={username}
          {...chat}
          getMessageValue={getMessageValue}
          sendMessage={sendMessage}
        />
      ))}
    </>
  );
};

export default Chat;
