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
        <>
          <div className="profile">
            {Object.keys(editProfile).map((prop) => {
              const key = prop as keyof typeof EditProfile;
              return (
                <div key={key} className="profile-container">
                  <ProfileField
                    name={key}
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
