import React, { useEffect, useRef } from "react";
import { ProfileDeletionModal } from "../../../models/modal";

const DeletionModal = ({
  accountId,
  success,
  setDeleteModalStatus,
  deleteAccount,
  onModalClosing,
}: ProfileDeletionModal) => {
  const modal = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  const clickHandler = ({ target }: globalThis.MouseEvent) => {
    !modal.current.contains(target) && success
      ? onModalClosing()
      : setDeleteModalStatus(false);
  };

  return (
    <div className="profile-deletion">
      <div ref={modal} className="profile-deletion-modal">
        {success ? (
          <>
            <div className="profile-deletion-modal-message">{success}</div>
            <div className="profile-deletion-modal-buttons">
              <button
                className="profile-deletion-modal-button"
                onClick={() => onModalClosing()}
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="profile-deletion-modal-message">
              Are you sure you want to delete the account ? This action is
              irreversible
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
        )}
      </div>
    </div>
  );
};

export default DeletionModal;
