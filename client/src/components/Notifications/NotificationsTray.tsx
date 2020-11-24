import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./notificationstray.scss";

const NotificationsTray = () => {
  return (
    <div className="notification-tray">
      <div className="notification-content">
        <div className="notification-content-container">NOTIF 1</div>
        <div>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default NotificationsTray;
