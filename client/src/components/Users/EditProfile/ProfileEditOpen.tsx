import React, { useRef } from "react";
import typeChecker from "../../../utils/inputType";
import { UserProfile } from "../../../models/users";
import capitalize from "../../../utils/capitalizeFirstLetter";

const ProfileEditOpen = ({ name, value, setEditStatus }: UserProfile) => {
  const fileInput = useRef<HTMLInputElement>(null);
  return (
    <>
      <input ref={fileInput} type="file" style={{ display: "none" }} />
      <form className="profile-edit-form">
        {/* {name === "avatar" ? } */}
        <input
          className={
            typeChecker(name) === "textarea"
              ? "input-edit-textarea"
              : "input-edit-input"
          }
          type={typeChecker(name)}
          placeholder={`${capitalize(name)}...`}
        />

        <div className="profile-edit-open-buttons">
          <button className="field-modify">Confirm</button>
          <button className="field-modify" onClick={() => setEditStatus(false)}>
            Close
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileEditOpen;
