import React, { useRef, useEffect } from "react";
import { AdminConfirmationProps } from "../../models/modal";

const ConfirmModal = ({
  collection,
  deleteProject,
  closeModal,
  banUser,
  id,
  duration,
}: AdminConfirmationProps) => {
  const modal = useRef<any>(null);
  console.log("DURATION : ", duration);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = ({ target }: MouseEvent) => {
    !modal.current.contains(target) && closeModal();
  };

  return (
    <div className="profile-deletion">
      <div ref={modal} className="profile-deletion-modal">
        <>
          <div className="profile-deletion-modal-message">
            {`Are you sure you want to delete this ${collection} ? This action is
            irreversible`}
          </div>
          <div className="profile-deletion-modal-buttons">
            <button
              className="profile-deletion-modal-button"
              onClick={() =>
                collection === "project" ? deleteProject(id) : banUser()
              }
            >
              Yes
            </button>
            <button
              className="profile-deletion-modal-button"
              onClick={() => closeModal()}
            >
              No
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default ConfirmModal;
