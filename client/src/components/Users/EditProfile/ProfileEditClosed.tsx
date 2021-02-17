import React from "react";
import { UserProfileClosed } from "../../../models/users";
import capitalize from "../../../utils/capitalizeFirstLetter";
import { url } from "../../../environments/api";

const ProfileEditClosed = ({ name, value, setEditStatus }: UserProfileClosed) => {
  return (
    <>
      <div className="profile-field">
        <div className="field-name">{capitalize(name)} :</div>
        {name === "avatar" && typeof value === "string" ? (
          <img
            className="profile-avatar"
            src={value.includes("avatar") ? `${url}/uploads/users/${value}` : value}
            alt="user-avatar"
          />
        ) : (
          <div className="field-value">
            {!value || (Array.isArray(value) && !value.length)
              ? "Not yet specified"
              : Array.isArray(value)
              ? value.map((val) => (
                  <div key={val} className="field-value-array">
                    {val}
                  </div>
                ))
              : value}
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
