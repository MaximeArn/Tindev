import React from "react";
import { User } from "../../../models/users";

const Profile = ({ username, firstname, lastname, email, city }: User) => {
  return <div className="profile">{username}</div>;
};

export default Profile;
