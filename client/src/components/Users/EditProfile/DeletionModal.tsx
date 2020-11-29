import React from "react";

const DeletionModal = () => {
  return (
    <div className="profile-deletion">
      <div className="profile-deletion-modal">
        <div className="profile-deletion-modal-message">
          Are you sure you want to delete the account ? This action is
          irreversible
        </div>
        <div className="profile-deletion-modal-buttons">
          <button className="profile-deletion-modal-button">Yes</button>
          <button className="profile-deletion-modal-button">No</button>
        </div>
      </div>
    </div>
  );
};

export default DeletionModal;
