/** @format */

import React, { useState, useRef } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(false);
  const chatHeader = useRef(null);
  return (
    <div className="chatZone">
      {chat ? (
        <>
          <div className="chatZone-header" onClick={() => setChat(!chat)}>
            <p>Michel</p>
            <button className="closeIcon">
              <CloseIcon />
            </button>
          </div>
          <div className="chatZone-content"></div>
        </>
      ) : (
        <div
          ref={chatHeader}
          className="chatZone-header"
          onClick={(event) => {
            event.target === chatHeader.current && setChat(!chat);
            console.log("element clicked : ", event.target);
            console.log("close button : ", chatHeader.current);
          }}
        >
          <p>Michel</p>
          <button
            className="closeIcon"
            onClick={() => {
              // console.log("destroy");
            }}
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
