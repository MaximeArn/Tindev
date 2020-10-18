import React from "react";
import "./declinemodal.scss";

const DeclineModal = () => {
  return (
    <div className="apply-success">
      <div className="project-detail-padding">
        <div className="apply-success-message">
          Are you sure you want to decline this applicant ?
        </div>
      </div>
      <button className="apply-success-button" type="button">
        Close
      </button>
    </div>
  );
};

export default DeclineModal;
