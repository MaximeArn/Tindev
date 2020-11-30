import React, { useEffect, useRef } from "react";

const DeletionSuccess = ({ success, onModalClosing }) => {
  const modal = useRef<any>(null);

  const handleOutsideClick = ({ target }: globalThis.MouseEvent) => {
    !modal.current.contains(target) && onModalClosing();
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
            onClick={() => onModalClosing()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletionSuccess;
