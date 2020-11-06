import React, { MouseEvent, useRef } from "react";
import { DeleteProjectModalProps } from "../../../models/projects";

const Modal = ({
  deleteProject,
  projectId,
  setModalStatus,
}: DeleteProjectModalProps) => {
  const modalContainer = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={modalContainer}
      onClick={({ target }) =>
        target === modalContainer.current && setModalStatus(false)
      }
      className="decline"
    >
      <div className="decline-applicant">
        <div className="project-detail-padding">
          <div className="decline-applicant-message">
            Are you sure to delete this project ?
          </div>
        </div>
        <div className="decline-applicant-buttons">
          <button
            onClick={() => deleteProject(projectId)}
            className="decline-applicant-button"
            type="button"
          >
            Yes
          </button>
          <button
            onClick={() => setModalStatus(false)}
            className="decline-applicant-button"
            type="button"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
