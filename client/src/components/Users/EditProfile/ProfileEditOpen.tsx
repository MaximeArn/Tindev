import React, { ChangeEvent, useRef, useState } from "react";
import typeChecker from "../../../utils/inputType";
import { UserProfileOpen } from "../../../models/users";
import capitalize from "../../../utils/capitalizeFirstLetter";

const ProfileEditOpen = ({
  name,
  value,
  setEditStatus,
  updateUserProfile,
  getEditProfileValue,
}: UserProfileOpen) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const filePreview = useRef<any>(null);
  const [isImageSelected, setImageStatus] = useState<boolean>(false);

  const handleImageSelect = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    files && reader.readAsDataURL(files[0]);

    reader.onload = ({ target }: ProgressEvent<FileReader>) => {
      filePreview.current.src = target?.result;
    };

    setImageStatus(true);
  };

  return (
    <>
      <input
        ref={fileInput}
        type="file"
        style={{ display: "none" }}
        onChange={handleImageSelect}
      />
      <form
        className="profile-edit-form"
        onSubmit={(event) => {
          event.preventDefault();
          updateUserProfile(name);
          setEditStatus(false);
        }}
      >
        {name === "avatar" ? (
          <>
            {!isImageSelected ? (
              <img
                className="profile-edit-image-preview"
                onClick={() => fileInput.current?.click()}
                src="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
                alt="preview-image"
              />
            ) : (
              <img className="profile-edit-image-preview" ref={filePreview} />
            )}
          </>
        ) : name === "password" ? (
          <div className="profile-edit-password">
            {Object.entries(value).map(([key, val]: any) => {
              return (
                <input
                  key={key}
                  className="profile-edit-password-input"
                  type={typeChecker(name)}
                  name={key}
                  placeholder={capitalize(key)}
                  value={val}
                  onChange={({ target }) =>
                    getEditProfileValue(name, target.value, key)
                  }
                />
              );
            })}
          </div>
        ) : (
          <input
            className={
              typeChecker(name) === "textarea"
                ? "input-edit-textarea"
                : "input-edit-input"
            }
            name={name}
            type={typeChecker(name)}
            placeholder={`${capitalize(name)}...`}
            value={value}
            onChange={({ target }) => getEditProfileValue(name, target.value)}
          />
        )}
        <div className="profile-edit-open-buttons">
          <button className="field-modify" type="submit">
            Confirm
          </button>
          <button
            className="field-modify"
            onClick={() => {
              name !== "avatar" && name === "password"
                ? Object.keys(value).forEach((key) =>
                    getEditProfileValue(name, "", key)
                  )
                : getEditProfileValue(name, "");
              setEditStatus(false);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileEditOpen;
