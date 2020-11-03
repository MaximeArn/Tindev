/** @format */

import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(false);
  return (
    <div className="chatZone">
      {chat ? (
        <>
          <div className="chatZone-header">
            <p>Michel</p>
            <button className="closeIcon" onClick={() => setChat(!chat)}>
              <CloseIcon />
            </button>
          </div>
          <div className="chatZone-content"></div>
        </>
      ) : (
        <div className="chatZone-header">
          <p>Michel</p>
          <button className="closeIcon" onClick={() => setChat(!chat)}>
            <ExpandLessIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
