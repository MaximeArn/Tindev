import React, { useState } from "react";
import { Profile } from "../../../models/users";
import ProfileEditClosed from "./ProfileEditClosed";
import ProfileEditOpen from "./ProfileEditOpen";
import CircularProgress from "@material-ui/core/CircularProgress";

const Profile = ({
  name,
  inputValue,
  value,
  loader: { fieldName, status },
  updateUserProfile,
  getEditProfileValue,
  resetEditProfileValue,
  isGoogleAuth,
}: Profile) => {
  const [isEditOpen, setEditStatus] = useState<boolean>(false);

  return (
    <>
      {status && fieldName === name ? (
        <div className="profile-edit-loading">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : isEditOpen ? (
        <ProfileEditOpen
          isGoogleAuth={isGoogleAuth}
          name={name}
          inputValue={inputValue}
          value={value}
          setEditStatus={setEditStatus}
          updateUserProfile={updateUserProfile}
          getEditProfileValue={getEditProfileValue}
          resetEditProfileValue={resetEditProfileValue}
        />
      ) : (
        <ProfileEditClosed
          isGoogleAuth={isGoogleAuth}
          name={name}
          value={value}
          setEditStatus={setEditStatus}
        />
      )}
    </>
  );
};

export default Profile;
