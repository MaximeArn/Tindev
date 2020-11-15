import React from "react";
import { UserProfile } from "../../../models/users";

const ProfileEditClosed = ({ name, value }: UserProfile) => {
  return (
    <div className="profile-field">
      <div className="field-name">{name} :</div>
      <div className="field-value">{value}</div>
    </div>
  );
};

export default ProfileEditClosed;
