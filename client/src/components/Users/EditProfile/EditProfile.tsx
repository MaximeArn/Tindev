import React, { useEffect } from "react";
import { EditUserProfile } from "../../../models/users";
import "./editprofile.scss";

const EditProfile = ({ getUserProfile }: EditUserProfile) => {
  useEffect(() => {
    getUserProfile();
  }, []);

  return <div></div>;
};

export default EditProfile;
