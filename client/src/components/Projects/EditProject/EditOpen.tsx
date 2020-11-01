import React, { useRef, useState } from "react";
import { url } from "../../../environments/api";
import MultipleCategories from "../../containers/MultipleCategories";
import capitalize from "../../../utils/capitalizeFirstLetter";
import typeChecker from "../../../utils/projectEditTypeChecker";
import { EditProjectStatus } from "../../../models/projects";

const EditOpen = ({
  name,
  value,
  isExpanded,
  setExpanded,
}: EditProjectStatus) => {
  const [isImageSet, setImage] = useState(false);
  const imageFileOpener = useRef<any>(null);
  const imagePreview = useRef<any>(null);

  const showImagePreview = ({ files }: HTMLInputElement) => {
    if (files) {
      setImage(true);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = (event) => {
        imagePreview.current.src = event.target?.result;
      };
    }
  };

  const onFileBrowserClick = () => {
    imageFileOpener.current.click();
  };

  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        ref={imageFileOpener}
        onChange={() => showImagePreview(imageFileOpener.current)}
      />
      <div className="field">
        <form className="field-edit-form">
          <label>{name.toUpperCase()}</label>
          {name === "image" ? (
            <div
              className="field-edit-image-container"
              onClick={onFileBrowserClick}
            >
              {isImageSet ? (
                <img className="field-edit-image" ref={imagePreview} />
              ) : (
                <img
                  className="field-edit-image"
                  src={`${url}/uploads/${value}`}
                  alt="image"
                />
              )}
            </div>
          ) : name === "categories" ? (
            <div className="field-edit-categories">
              <MultipleCategories />
            </div>
          ) : (
            <div className="field-edit-form-infos">
              <input
                className={
                  name === "description"
                    ? "field-edit-textarea"
                    : "field-edit-input"
                }
                type={typeChecker(name)}
                name={name}
                placeholder={`New ${capitalize(name)}...`}
              />
            </div>
          )}
          <div>
            <button className="field-edit-button" type="submit">
              Confirm
            </button>
            <button
              className="field-edit-button"
              type="button"
              onClick={() => setExpanded(!isExpanded)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditOpen;
