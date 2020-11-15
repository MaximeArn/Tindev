import React from "react";
import { UserProfile } from "../../../models/users";
import capitalize from "../../../utils/capitalizeFirstLetter";

const ProfileEditClosed = ({ name, value, setEditStatus }: UserProfile) => {
  return (
    <>
      <div className="profile-field">
        <div className="field-name">{capitalize(name)} :</div>
        <div className="field-value">{value}</div>
      </div>
      <button className="field-modify" onClick={() => setEditStatus(true)}>
        Modify
      </button>
    </>
  );
};

export default ProfileEditClosed;
