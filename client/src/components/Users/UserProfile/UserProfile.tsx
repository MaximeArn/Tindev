import React, { useEffect } from "react";
import { UserProfileProps } from "../../../models/users";
import User from "../../containers/User";
import "./userprofile.scss";

const UserProfile = ({ getUser }: UserProfileProps) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="user-profile">
      <User />
    </div>
  );
};

export default UserProfile;
