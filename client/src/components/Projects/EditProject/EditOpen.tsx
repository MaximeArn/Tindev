import React from "react";
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
  return (
    <div className="field">
      <form className="field-edit-form">
        {name === "image" ? (
          <img
            className="field-edit-image"
            src={`${url}/uploads/${value}`}
            alt="image"
          />
        ) : name === "categories" ? (
          <>
            <div className="field-edit-categories">
              <MultipleCategories />
            </div>
          </>
        ) : (
          <div className="field-edit-form-infos">
            <label>{capitalize(name)}</label>
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
  );
};

export default EditOpen;
