import React from "react";
import { url } from "../../../environments/api";
import { EditProjectStatusClosed } from "../../../models/projects";
import CircularProgress from "@material-ui/core/CircularProgress";

const EditClosed = ({
  name,
  value,
  fieldName,
  loader,
  isExpanded,
  setExpanded,
}: EditProjectStatusClosed) => {
  return (
    <div className="field">
      {fieldName === name && loader ? (
        <div className="field-loading-button">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default EditClosed;
{
  /* (
      <div className="field-name">{name}</div>
      {name === "image" ? (
        <img
          className="field-edit-image"
          src={`${url}/uploads/${value}`}
          alt="image"
        />
      ) : (
        <div className="field-text-content">{value}</div>
      )
      <button
        className="field-edit-button"
        type="button"
        onClick={() => setExpanded(!isExpanded)}
      >
        Modify
      </button> */
}
