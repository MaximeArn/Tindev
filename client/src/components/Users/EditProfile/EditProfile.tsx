import React, { useEffect } from "react";
import { EditUserProfile } from "../../../models/users";
import ProfileField from "./ProfileField";
import "./editprofile.scss";

const EditProfile = ({
  user,
  editProfile,
  getUserProfile,
}: EditUserProfile) => {
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      {user &&
        Object.entries(editProfile).map(([key, value]) => {
          return (
            <ProfileField key={key} name={key} value={user[key] || value} />
          );
        })}
    </>
  );
};

export default EditProfile;
