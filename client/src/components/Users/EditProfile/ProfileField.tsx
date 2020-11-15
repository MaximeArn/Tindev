import React from "react";
import { UserProfile } from "../../../models/users";

const Profile = ({ name, value }: UserProfile) => {
  return (
    <div className="profile-field">
      <div>{name}</div>
      <div>{value ? value : `Not yet specified`}</div>
    </div>
  );
};

export default Profile;
