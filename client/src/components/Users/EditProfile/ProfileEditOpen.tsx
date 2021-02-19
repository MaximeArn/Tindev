import React, { ChangeEvent, useRef, useState } from "react";
import typeChecker from "../../../utils/inputType";
import { UserProfileOpen } from "../../../models/users";
import capitalize from "../../../utils/capitalizeFirstLetter";
import { url } from "../../../environments/api";
import isRequired from "../../../utils/authMandatoryFields";
import MultipleCategories from "../../containers/MultipleCategories";

const ProfileEditOpen = ({
  name,
  inputValue,
  value,
  setEditStatus,
  updateUserProfile,
  getEditProfileValue,
  resetEditProfileValue,
}: UserProfileOpen) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const filePreview = useRef<any>(null);
  const [isImageSelected, setImageStatus] = useState<boolean>(false);

  const handleImageSelect = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (files) {
      reader.readAsDataURL(files[0]);
      getEditProfileValue(name, files[0]);

      reader.onload = ({ target }: ProgressEvent<FileReader>) => {
        filePreview.current.src = target?.result;
      };

      setImageStatus(true);
    }
  };

  const resetInputValues = () => {
    name === "password"
      ? Object.keys(inputValue).forEach((key) => resetEditProfileValue(name, key))
      : resetEditProfileValue(name);
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
        {(name === "avatar" || name === "background_image") &&
        typeof value === "string" ? (
          <>
            <div className="avatar-preview-name">
              {capitalize(name).replace("_", " ")} :
            </div>
            {!isImageSelected ? (
              <img
                className="profile-edit-image-preview"
                onClick={() => fileInput.current?.click()}
                src={value.includes("avatar") ? `${url}/uploads/users/${value}` : value}
                alt="profile-avatar-preview"
              />
            ) : (
              <img
                className="profile-edit-image-preview"
                ref={filePreview}
                onClick={() => fileInput.current?.click()}
              />
            )}
          </>
        ) : name === "password" ? (
          <div className="profile-edit-password">
            {Object.entries(inputValue).map(([key, val]: any) => {
              return (
                <input
                  key={key}
                  className="profile-edit-password-input"
                  type={typeChecker(name)}
                  name={key}
                  placeholder={capitalize(key)}
                  value={val}
                  required={isRequired(key)}
                  onChange={({ target }) => getEditProfileValue(name, target.value, key)}
                />
              );
            })}
          </div>
        ) : name === "technos" ? (
          <div className="profile-edit-open-technos">
            <MultipleCategories inputName="technos" toUpdate="userTechnos" />
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
            value={inputValue}
            onChange={({ target }) => getEditProfileValue(name, target.value)}
            required={isRequired(name)}
          />
        )}
        <div className="profile-edit-open-buttons">
          <button className="field-modify" type="submit">
            Confirm
          </button>
          <button
            type="button"
            className="field-modify"
            onClick={() => {
              setEditStatus(false);
              resetInputValues();
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
