import React from "react";
import { DeclineApplicantModalProps } from "../../models/projects";
import "./declinemodal.scss";

const DeclineModal = ({
  projectId,
  userId,
  setModalStatus,
  declineApplicant,
}: DeclineApplicantModalProps) => {
  return (
    <div className="decline-applicant">
      <div className="project-detail-padding">
        <div className="decline-applicant-message">
          Are you sure you want to decline this applicant ?
        </div>
      </div>
      <div className="decline-applicant-buttons">
        <button className="decline-applicant-button" type="button">
          Yes
        </button>
        <button className="decline-applicant-button" type="button">
          No
        </button>
      </div>
    </div>
  );
};

export default DeclineModal;
