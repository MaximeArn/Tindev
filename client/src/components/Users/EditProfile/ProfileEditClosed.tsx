import React from "react";
import { UserProfileClosed } from "../../../models/users";
import capitalize from "../../../utils/capitalizeFirstLetter";
const { url } = require("../../../environments/api");

const ProfileEditClosed = ({
  name,
  value,
  setEditStatus,
}: UserProfileClosed) => {
  return (
    <>
      <div className="profile-field">
<<<<<<< HEAD
        <div className="field-name">{capitalize(name)}&nbsp;:</div>
        {name === "avatar" ? (
=======
        <div className="field-name">{capitalize(name)} :</div>
        {name === "avatar" && value?.includes("-") ? (
>>>>>>> dc1ba6c8920fd325b22230a5e2b73416cd10aa64
          <img
            className="profile-avatar"
            src={`${url}/uploads/users/${value}`}
            alt="user-avatar"
          />
        ) : (
          <div className="field-value">
            {!value || !value.length ? "Not yet specified" : value}
          </div>
        )}
      </div>
      <button className="field-modify" onClick={() => setEditStatus(true)}>
        Modify
      </button>
    </>
  );
};

export default ProfileEditClosed;
