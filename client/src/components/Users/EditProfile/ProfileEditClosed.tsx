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
        <div className="field-name">{capitalize(name)}&nbsp;:</div>
        {name === "avatar" ? (
          <img
            className="profile-avatar"
            src={`${url}/uploads/users/${value}`}
            alt="user-avatar"
          />
        ) : (
          <div className="field-value">{value}</div>
        )}
      </div>
      <button className="field-modify" onClick={() => setEditStatus(true)}>
        Modify
      </button>
    </>
  );
};

export default ProfileEditClosed;
