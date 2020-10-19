import React from "react";
import { DeclineApplicantModalProps } from "../../../models/projects";
import "./declinemodal.scss";

const DeclineModal = ({
  projectId,
  userId,
  setModalStatus,
  declineApplicant,
}: DeclineApplicantModalProps) => {
  const handleConfirmClick = () => {
    declineApplicant({ projectId, userId });
    setModalStatus(false);
  };

  return (
    <div className="decline">
      <div className="decline-applicant">
        <div className="project-detail-padding">
          <div className="decline-applicant-message">
            Are you sure you want to decline this applicant ?
          </div>
        </div>
        <div className="decline-applicant-buttons">
          <button
            className="decline-applicant-button"
            type="button"
            onClick={handleConfirmClick}
          >
            Yes
          </button>
          <button
            className="decline-applicant-button"
            type="button"
            onClick={() => setModalStatus(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeclineModal;
