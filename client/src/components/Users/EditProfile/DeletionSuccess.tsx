import React, { useEffect, useRef } from "react";
import { ProfileDeletionSuccessModal } from "../../../models/modal";

const DeletionSuccess = ({
  success,
  onAccountClosing,
}: ProfileDeletionSuccessModal) => {
  const modal = useRef<any>(null);

  const handleOutsideClick = ({ target }: globalThis.MouseEvent) => {
    !modal.current.contains(target) && onAccountClosing();
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="profile-deletion">
      <div ref={modal} className="profile-deletion-modal">
        <div className="profile-deletion-modal-message">{success}</div>
        <div className="profile-deletion-modal-buttons">
          <button
            className="profile-deletion-modal-button"
            onClick={() => onAccountClosing()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletionSuccess;
