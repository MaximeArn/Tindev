import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { url } from "../../../environments/api";
import MultipleCategories from "../../containers/MultipleCategories";
import capitalize from "../../../utils/capitalizeFirstLetter";
import typeChecker from "../../../utils/projectEditTypeChecker";
import { EditProjectStatusOpen } from "../../../models/projects";
import Select from "../../containers/SingleSelect";

const EditOpen = ({
  name,
  value,
  inputValue,
  isExpanded,
  setExpanded,
  contributors,
  getProjectEditInputValues,
  setProjectOwnershipModal,
  setNewProjectImage,
  updateProject,
}: EditProjectStatusOpen) => {
  const [isImageSet, setImage] = useState(false);
  const imageFileOpener = useRef<any>(null);
  const imagePreview = useRef<any>(null);

  const showImagePreview = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    setImage(true);
    const reader = new FileReader();
    files && reader.readAsDataURL(files[0]);

    reader.onload = (event: ProgressEvent<FileReader>) => {
      imagePreview.current.src = event.target?.result;
    };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setExpanded(false);
    name === "image" && setNewProjectImage(imageFileOpener.current.files[0]);
    name === "author" ? setProjectOwnershipModal(true) : updateProject(name);
  };

  return (
    <>
      <div className="field">
        <form className="field-edit-form" onSubmit={handleSubmit}>
          <label>{name.toUpperCase()}</label>
          {name === "image" ? (
            <>
              <input
                type="file"
                style={{ display: "none" }}
                ref={imageFileOpener}
                onChange={showImagePreview}
              />
              <div
                className="field-edit-image-container"
                onClick={() => imageFileOpener.current.click()}
              >
                {isImageSet ? (
                  <img className="field-edit-image" ref={imagePreview} />
                ) : (
                  <img
                    className="field-edit-image"
                    src={`${url}/uploads/projects/${value}`}
                    alt="image"
                  />
                )}
              </div>
            </>
          ) : name === "categories" ? (
            <div className="field-edit-categories">
              <MultipleCategories
                toUpdate="projectUpdateCategories"
                inputName="categories"
              />
            </div>
          ) : name === "author" ? (
            <Select label={name} values={contributors} inputValue={inputValue} />
          ) : (
            <div className="field-edit-form-infos">
              <input
                required
                className={
                  name === "description" ? "field-edit-textarea" : "field-edit-input"
                }
                type={typeChecker(name)}
                name={name}
                placeholder={`New ${capitalize(name)}...`}
                value={inputValue}
                onChange={({ target }) => getProjectEditInputValues(name, target.value)}
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
              onClick={() => {
                setExpanded(!isExpanded);
                getProjectEditInputValues(name);
              }}
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
