import React from "react";
import { url } from "../../../environments/api";
import { EditProjectStatusClosed } from "../../../models/projects";

const EditClosed = ({
  name,
  value,
  isExpanded,
  setExpanded,
}: EditProjectStatusClosed) => {
  return (
    <div className="field">
      <div className="field-name">{name}</div>
      {name === "image" ? (
        <img
          className="field-edit-image"
          src={`${url}/uploads/${value}`}
          alt="image"
        />
      ) : (
        <div className="field-text-content">{value}</div>
      )}
      <button
        className="field-edit-button"
        type="button"
        onClick={() => setExpanded(!isExpanded)}
      >
        Modify
      </button>
    </div>
  );
};

export default EditClosed;
