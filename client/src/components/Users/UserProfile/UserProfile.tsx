import React, { useEffect } from "react";
import { UserProps } from "../../../models/users";
import "./userprofile.scss";

const UserProfile = ({ user, getUser }: UserProps) => {
  console.log("USER : ", user);
  useEffect(() => {
    getUser();
  }, []);

  return <div></div>;
};

export default UserProfile;
