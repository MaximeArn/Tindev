import React from "react";
import { SuspendedAccountModalProps } from "../../models/states";

const SuspendedAccountModal = ({ message }: SuspendedAccountModalProps) => {
  return (
    <div className="profile-deletion">
      <div className="profile-deletion-modal">
        <div className="profile-deletion-modal-message">{message}</div>
        <div className="profile-deletion-modal-buttons">
          <button className="profile-deletion-modal-button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default SuspendedAccountModal;
