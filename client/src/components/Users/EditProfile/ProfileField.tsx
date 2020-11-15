import React, { useState } from "react";
import { Profile } from "../../../models/users";
import ProfileEditClosed from "./ProfileEditClosed";
import ProfileEditOpen from "./ProfileEditOpen";

const Profile = ({ name, inputValue, value, updateUserProfile }: Profile) => {
  const [isEditOpen, setEditStatus] = useState<boolean>(false);

  return (
    <>
      {isEditOpen ? (
        <ProfileEditOpen
          name={name}
          value={inputValue}
          setEditStatus={setEditStatus}
          updateUserProfile={updateUserProfile}
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
