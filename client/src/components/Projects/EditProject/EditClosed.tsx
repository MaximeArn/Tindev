import React from "react";
import { url } from "../../../environments/api";
import { EditProjectStatusClosed } from "../../../models/projects";
import CircularProgress from "@material-ui/core/CircularProgress";
import OwnershipModal from "./Modals/OwnershipModal";

const EditClosed = ({
  name,
  value,
  loadingField,
  loader,
  author,
  isExpanded,
  projectOwnershipModal,
  setProjectOwnershipModal,
  updateProject,
  setExpanded,
}: EditProjectStatusClosed) => {
  return (
    <div className="field">
      {loadingField === name && loader ? (
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
              src={`${url}/uploads/projects/${value}`}
              alt="image"
            />
          ) : name === "categories" ? (
            <div className="field-text-content">
              {Array.isArray(value) ? (
                value.map((name: string) => <p key={name}>{name}</p>)
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
      {projectOwnershipModal && (
        <OwnershipModal
          name={name}
          updateProject={updateProject}
          author={author}
          setProjectOwnershipModal={setProjectOwnershipModal}
        />
      )}
    </div>
  );
};

export default EditClosed;
