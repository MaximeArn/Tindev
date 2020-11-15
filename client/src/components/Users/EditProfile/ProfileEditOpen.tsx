import React from "react";
import typeChecker from "../../../utils/inputType";
import { UserProfile } from "../../../models/users";
import capitalize from "../../../utils/capitalizeFirstLetter";

const ProfileEditOpen = ({ name, value, setEditStatus }: UserProfile) => {
  return (
    <form className="profile-edit-form">
      <input
        className={
          typeChecker(name) === "textarea"
            ? "input-edit-textarea"
            : "input-edit-input"
        }
        type={typeChecker(name)}
        placeholder={`${capitalize(name)}...`}
      />

      <button className="field-modify">Confirm</button>
      <button className="field-modify" onClick={() => setEditStatus(false)}>
        Close
      </button>
    </form>
  );
};

export default ProfileEditOpen;
