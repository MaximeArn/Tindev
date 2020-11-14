import React, { useEffect } from "react";
import { EditUserProfile } from "../../../models/users";
import Profile from "./Profile";
import "./editprofile.scss";

const EditProfile = ({ user, getUserProfile }: EditUserProfile) => {
  useEffect(() => {
    getUserProfile();
  }, []);

  return <>{user && <Profile {...user} />}</>;
};

export default EditProfile;
