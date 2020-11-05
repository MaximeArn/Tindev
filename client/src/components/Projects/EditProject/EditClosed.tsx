/** @format */

import React from "react";
import { url } from "../../../environments/api";
import { EditProjectStatusClosed } from "../../../models/projects";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Category } from "../../../models/categories";

const EditClosed = ({
  name,
  value,
  fieldName,
  loader,
  isExpanded,
  setExpanded,
}: EditProjectStatusClosed) => {
  console.log(value);

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
          ) : name === "categories" ? (
            <div className="field-text-content">
              {typeof value !== "string" ? (
                value.map((name: string) => <p>{name}</p>)
              ) : (
                <p>{value}</p>
              )}
            </div>
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
