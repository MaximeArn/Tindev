import React from "react";
import { ProjectOwnershipModal } from "../../../../models/projects";

const OwnershipModal = ({
  name,
  updateProject,
  author,
  setProjectOwnershipModal,
}: ProjectOwnershipModal) => {
  return (
    <div className="decline-applicant">
      <div className="project-detail-padding">
        <div className="decline-applicant-message">
          Are you sure you want to give the project ownership to {author} ? Warning : This
          action is irreversible
        </div>
      </div>
      <div className="decline-applicant-buttons">
        <button
          className="decline-applicant-button"
          type="button"
          onClick={() => updateProject(name)}
        >
          Yes
        </button>
        <button
          className="decline-applicant-button"
          type="button"
          onClick={() => setProjectOwnershipModal(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default OwnershipModal;
