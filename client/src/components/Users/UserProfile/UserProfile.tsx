import React, { useEffect } from "react";
import { UserProfileProps } from "../../../models/users";
import User from "../../containers/User";
import "./userprofile.scss";

const UserProfile = ({ user, getUser }: UserProfileProps) => {
  useEffect(() => {
    getUser();
  }, []);

  return <div className="user-profile">{user && <User {...user} />}</div>;
};

export default UserProfile;
