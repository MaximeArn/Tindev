import React, { useEffect } from "react";
import { EditUserProfile, EditProfile } from "../../../models/users";
import ProfileField from "./ProfileField";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./editprofile.scss";

const EditProfile = ({
  user,
  error,
  success,
  isLoading,
  loader,
  editProfile,
  getUserProfile,
  updateUserProfile,
  getEditProfileValue,
  resetMessages,
}: EditUserProfile) => {
  useEffect(() => {
    getUserProfile();
  }, []);

  useEffect(() => {
    (error || success) && setTimeout(() => resetMessages(), 3000);
  }, [error, success]);

  return (
    <>
      {user && (
        <>
          {isLoading && (
            <div className="loading-button">
              <p>Loading</p>
              <CircularProgress size={15} />
            </div>
          )}
          {success && <div className="profile-edit-success">{success}</div>}
          {error && <div className="profile-edit-error">{error}</div>}
          <div className="profile">
            {Object.entries(editProfile).map(([prop, value]) => {
              const key = prop as keyof typeof EditProfile;
              return (
                <div key={key} className="profile-container">
                  <ProfileField
                    updateUserProfile={updateUserProfile}
                    name={key}
                    loader={loader}
                    inputValue={value}
                    getEditProfileValue={getEditProfileValue}
                    value={
                      user[key]
                        ? user[key]
                        : key === "password"
                        ? "Change your password"
                        : "Not yet specified"
                    }
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default EditProfile;
