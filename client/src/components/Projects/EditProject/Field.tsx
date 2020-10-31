import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { url } from "../../../environments/api";

const Field = ({ name, value }: any) => {
  return (
    <div className="field">
      <div className="field-text">
        <div className="field-name">{name}</div>
        {name === "image" ? (
          <img src={`${url}/uploads/${value}`} alt="image" />
        ) : (
          <div>{value}</div>
        )}
      </div>
      <i className="field-edit-icon">
        <EditIcon />
      </i>
    </div>
  );
};

export default Field;
