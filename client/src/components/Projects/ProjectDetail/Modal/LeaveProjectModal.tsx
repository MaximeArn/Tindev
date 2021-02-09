import React, { MouseEvent, useEffect, useRef } from "react";
import { LeaveProjectProps } from "../../../../models/projects";

const LeaveProjectModal = ({
  id,
  leaveProject,
  setLeaveProjectModal,
}: LeaveProjectProps) => {
  const modalContainer = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleClick = ({ target }: globalThis.MouseEvent) => {
    !modalContainer.current.contains(target) && setLeaveProjectModal(false);
  };
  return (
    <>
      <div className="decline">
        <div ref={modalContainer} className="decline-applicant">
          <div className="project-detail-padding">
            <div className="decline-applicant-message">
              Are you sure you want to leave this project ?
            </div>
          </div>
          <div className="decline-applicant-buttons">
            <button
              className="decline-applicant-button"
              type="button"
              onClick={() => leaveProject(id)}
            >
              Yes
            </button>
            <button
              className="decline-applicant-button"
              type="button"
              onClick={() => setLeaveProjectModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveProjectModal;
