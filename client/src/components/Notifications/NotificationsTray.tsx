import React from "react";
import "./notificationstray.scss";

const NotificationsTray = () => {
  console.log("NOTIFICATION TRAY CALLED");
  return (
    <div className="notification-tray">
      <div className="notification-content">NOTIF 1</div>
      <div className="notification-content">NOTIF 2</div>
      <div className="notification-content">NOTIF 3</div>
      <div className="notification-content">NOTIF 4</div>
    </div>
  );
};

export default NotificationsTray;
