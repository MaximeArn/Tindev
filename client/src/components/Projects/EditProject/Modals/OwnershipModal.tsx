import React, { useRef } from "react";
import { ProjectOwnershipModal } from "../../../../models/projects";
import "./projectEditModal.scss";

const OwnershipModal = ({
  name,
  updateProject,
  author,
  setProjectOwnershipModal,
}: ProjectOwnershipModal) => {
  const modalContainer = useRef<HTMLDivElement>(null);
  return (
    <div className="project-ownership">
      <div className="project-ownership-container">
        <div className="project-ownership-padding">
          <div className="project-ownership-message">
            Are you sure you want to give the project ownership to {author} ?
          </div>
          <div className="project-ownership-message-warning">
            Warning : This action is irreversible
          </div>
        </div>
        <div className="project-ownership-buttons">
          <button
            className="project-ownership-button"
            type="button"
            onClick={() => updateProject(name)}
          >
            Yes
          </button>
          <button
            className="project-ownership-button"
            type="button"
            onClick={() => setProjectOwnershipModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnershipModal;
