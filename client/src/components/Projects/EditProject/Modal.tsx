import React, { MouseEvent, useRef } from "react";
import { DeleteProjectModalProps } from "../../../models/projects";
import { useHistory } from "react-router-dom";

const Modal = ({
  deleteProject,
  projectId,
  setModalStatus,
  success,
}: DeleteProjectModalProps) => {
  const modalContainer = useRef<HTMLDivElement>(null);
  const history = useHistory();
  return (
    <>
      <div
        ref={modalContainer}
        onClick={({ target }) => {
          target === modalContainer.current && setModalStatus(false);
          success && history.push("/");
        }}
        className="decline"
      >
        {success ? (
          <div className="apply-success">
            <div className="project-detail-padding">
              <div className="apply-success-message">{success}</div>
            </div>
            <button
              onClick={() => {
                setModalStatus(false);
                history.push("/");
              }}
              className="apply-success-button"
              type="button"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="decline-applicant">
            <div className="project-detail-padding">
              <div className="decline-applicant-message">
                Are you sure to delete this project ?
              </div>
            </div>
            <div className="decline-applicant-buttons">
              <button
                onClick={() => history.push("/")}
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
        )}
      </div>
    </>
  );
};

export default Modal;
