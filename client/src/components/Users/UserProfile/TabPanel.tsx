import React from "react";
import { UserTabPanelProps } from "../../../models/users";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabPanel = ({ content: { value } }: UserTabPanelProps) => {
  return (
    <>
      {Array.isArray(value) && value.length ? (
        <ul className="user-profile-content-list">
          {value.map((val: string) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      ) : (
        <div className="user-profile-content-list">
          {!value || !value.length ? (
            <>
              <i className="user-profile-lock-icon">
                <FontAwesomeIcon icon={faLock} size="lg" />
              </i>
              <div>This information is private</div>
            </>
          ) : (
            value
          )}
        </div>
      )}
    </>
  );
};

export default TabPanel;
