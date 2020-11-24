import React, { useEffect, useRef } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./notificationstray.scss";
import { NotificationTrayProps } from "../../models/notifications";

const NotificationsTray = ({
  tooltips,
  setTrayStatus,
}: NotificationTrayProps) => {
  const tray = useRef<HTMLDivElement>(null);

  const clickHandler = (event: MouseEvent) => {
    console.log("CLICK LISTENER CALLED");
    !(event.target === tray.current) && setTrayStatus();
  };

  useEffect(() => {
    document.addEventListener("click", clickHandler, true);

    return () => {
      console.log("CLEANING FUNCTION CALLED");
      document.removeEventListener("click", clickHandler, true);
    };
  }, []);

  return (
    <div className="notification-tray" ref={tray}>
      {tooltips.length > 0 &&
        tooltips.map(({ _id, tooltip }) => (
          <div key={_id} className="notification-content">
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
