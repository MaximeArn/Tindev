import React, { useState } from "react";
import { UserProfile } from "../../../models/users";
import ProfileEditClosed from "./ProfileEditClosed";
import ProfileEditOpen from "./ProfileEditOpen";

const Profile = ({ name, value }: UserProfile) => {
  const [isEditOpen, setEditStatus] = useState<boolean>(false);

  return (
    <>
      {isEditOpen ? (
        <ProfileEditOpen />
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
