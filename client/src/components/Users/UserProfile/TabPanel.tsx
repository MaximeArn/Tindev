import React from "react";
import { UserTabPanelProps } from "../../../models/users";

const TabPanel = ({ content: { value } }: UserTabPanelProps) => {
  //TODO: make condition check to verify if value is null or, if it is an array , check if the array length is positive , otherwise display default information private message with lock icon
  return (
    <>
      {Array.isArray(value) ? (
        <ul className="user-profile-content-list">
          {value.map((val: string) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      ) : (
        <div className="user-profile-content-list">{value}</div>
      )}
    </>
  );
};

export default TabPanel;
