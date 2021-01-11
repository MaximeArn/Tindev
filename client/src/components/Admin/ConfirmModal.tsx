import React, { useRef } from "react";
import { AdminConfirmationProps } from "../../models/modal";

const ConfirmModal = ({
  collection,
  deleteProject,
}: AdminConfirmationProps) => {
  const modal = useRef<any>(null);

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
              onClick={() => deleteAccount(accountId)}
            >
              Yes
            </button>
            <button
              className="profile-deletion-modal-button"
              onClick={() => setDeleteModalStatus(false)}
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
