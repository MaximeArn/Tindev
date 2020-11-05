import React, { MouseEvent, useRef } from "react";
import { DeclineApplicantModalProps } from "../../../models/projects";

const Modal = () => {
  console.log("MODAL");
  //   const modalContainer = useRef<HTMLDivElement>(null);

  //   const handleModal = (event: MouseEvent<HTMLDivElement>) => {
  //     event.target === modalContainer.current && setModalStatus(false);
  //   };

  return (
    <div className="decline">
      <div className="decline-applicant">
        <div className="project-detail-padding">
          <div className="decline-applicant-message">
            Are you sure to delete this project ?
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
    </div>
  );
};

export default Modal;
