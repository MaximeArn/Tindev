import React, { useEffect } from "react";
import { EditUserProfile, EditProfile } from "../../../models/users";
import ProfileField from "./ProfileField";
import "./editprofile.scss";

const EditProfile = ({
  user,
  editProfile,
  getUserProfile,
  updateUserProfile,
  getEditProfileValue,
}: EditUserProfile) => {
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      {user && (
        <>
          <div className="profile">
            {Object.entries(editProfile).map(([prop, value]) => {
              const key = prop as keyof typeof EditProfile;
              return (
                <div key={key} className="profile-container">
                  <ProfileField
                    updateUserProfile={updateUserProfile}
                    name={key}
                    inputValue={value}
                    getEditProfileValue={getEditProfileValue}
                    value={user[key] ? user[key] : "Not yet specified"}
                  />
                </div>
              );
            })}
          </div>
          <div className="field-separator"></div>
        </>
      )}
    </>
  );
};

export default EditProfile;
