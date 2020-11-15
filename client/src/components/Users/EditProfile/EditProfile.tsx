import React, { useEffect } from "react";
import { EditUserProfile, EditProfile } from "../../../models/users";
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
      {user && (
        <div className="profile">
          {Object.entries(editProfile).map(([props, value]) => {
            const key = props as keyof typeof EditProfile;
            return (
              <ProfileField
                key={key}
                name={key}
                value={user[key] ? user[key] : value}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default EditProfile;
