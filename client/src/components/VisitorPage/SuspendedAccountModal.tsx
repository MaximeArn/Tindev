import React, { useEffect, useRef } from "react";
import { SuspendedAccountModalProps } from "../../models/states";

const SuspendedAccountModal = ({
  message,
  setModalStatus,
}: SuspendedAccountModalProps) => {
  const modal = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  const clickHandler = ({ target }: MouseEvent) => {
    !modal.current.contains(target) && setModalStatus(false);
  };

  return (
    <div className="profile-deletion">
      <div ref={modal} className="profile-deletion-modal">
        <h1 className="suspended-account-modal-title">Redirection</h1>
        <div className="profile-deletion-modal-message">{message}</div>
        <div className="profile-deletion-modal-buttons">
          <button
            className="profile-deletion-modal-button"
            onClick={() => setModalStatus(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuspendedAccountModal;
