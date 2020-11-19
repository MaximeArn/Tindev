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
}: Profile) => {
  const [isEditOpen, setEditStatus] = useState<boolean>(false);

  return (
    <>
      {status && fieldName === name ? (
        <div className="loading-button">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : isEditOpen ? (
        <ProfileEditOpen
          name={name}
          value={inputValue}
          avatar={name === "avatar" && value}
          setEditStatus={setEditStatus}
          updateUserProfile={updateUserProfile}
          getEditProfileValue={getEditProfileValue}
        />
      ) : (
        <ProfileEditClosed
          name={name}
          value={value}
          setEditStatus={setEditStatus}
        />
      )}
    </>
  );
};

export default Profile;
