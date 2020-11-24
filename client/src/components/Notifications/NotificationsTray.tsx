import React, { useEffect, useRef } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./notificationstray.scss";
import { NotificationTrayProps } from "../../models/notifications";

const NotificationsTray = ({
  tooltips,
  setTrayStatus,
  deleteNotification,
}: NotificationTrayProps) => {
  const trayContent = useRef<any>(null);

  const clickHandler = (event: MouseEvent) => {
    !trayContent.current?.contains(event.target) && setTrayStatus();
  };

  useEffect(() => {
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, []);

  return (
    <div ref={trayContent} className="notification-tray">
      {tooltips.length > 0 &&
        tooltips.map(({ _id, tooltip }) => (
          <div key={_id} className="notification-content">
            <div className="notification-content-container">{tooltip}</div>
            <div>
              <CloseIcon
                onClick={() => deleteNotification(_id)}
                fontSize="small"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default NotificationsTray;
