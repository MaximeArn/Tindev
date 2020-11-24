import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./notificationstray.scss";
import { NotificationTrayProps } from "../../models/notifications";

const NotificationsTray = ({ tooltips }: NotificationTrayProps) => {
  return (
    <div className="notification-tray">
      {tooltips.length > 0 &&
        tooltips.map(({ _id, tooltip }) => (
          <div className="notification-content">
            <div className="notification-content-container">{tooltip}</div>
            <div>
              <CloseIcon fontSize="small" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default NotificationsTray;
