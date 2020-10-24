import React, { useEffect } from "react";
import { UserProps } from "../../../models/users";
import "./userprofile.scss";

const UserProfile = ({ getUser }: UserProps) => {
  useEffect(() => {
    getUser();
  }, []);

  return <div></div>;
};

export default UserProfile;
