import React from "react";
import { UserProfile } from "../../../models/users";

const Profile = ({ name, value }: UserProfile) => {
  return (
    <div className="profile">
      {name} {value}
    </div>
  );
};

export default Profile;
