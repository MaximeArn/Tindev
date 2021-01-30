import React, { MouseEvent, useEffect, useRef } from "react";
import { ProjectOwnershipModal } from "../../../../models/projects";
import capitalize from "../../../../utils/capitalizeFirstLetter";
import "./projectEditModal.scss";

const OwnershipModal = ({
  name,
  updateProject,
  author,
  setProjectOwnershipModal,
}: ProjectOwnershipModal) => {
  const modal = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleOutsideClick = ({ target }: globalThis.MouseEvent) => {
    !modal.current?.contains(target) && setProjectOwnershipModal(false, name);
  };

  return (
    <div className="project-ownership">
      <div ref={modal} className="project-ownership-container">
        <div className="project-ownership-padding">
          <div className="project-ownership-message">
            Are you sure you want to give the project ownership to {capitalize(author)} ?
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
            onClick={() => setProjectOwnershipModal(false, name)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnershipModal;
