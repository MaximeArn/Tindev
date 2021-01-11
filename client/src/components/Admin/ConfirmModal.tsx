import React, { useRef, useEffect } from "react";
import { AdminConfirmationProps } from "../../models/modal";
import CircularProgress from "@material-ui/core/CircularProgress";

const ConfirmModal = ({
  collection,
  deleteProject,
  closeModal,
  banUser,
  id,
  duration,
  loader,
}: AdminConfirmationProps) => {
  const modal = useRef<any>(null);

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
                collection === "project"
                  ? deleteProject(id)
                  : banUser(id, duration)
              }
            >
              {loader ? (
                <div className="loading-button">
                  <p>Loading</p>
                  <CircularProgress size={15} />
                </div>
              ) : (
                "Yes"
              )}
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
