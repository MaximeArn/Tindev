import React, { useEffect } from "react";
import { UserProps } from "../../../models/users";
import User from "./User";
import "./userprofile.scss";

const UserProfile = ({ user, getUser }: UserProps) => {
  useEffect(() => {
    getUser();
  }, []);

  return <div className="user-profile">{user && <User {...user} />}</div>;
};

export default UserProfile;
