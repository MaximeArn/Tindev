/** @format */

import React, { FormEvent, MouseEvent, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { ProjectCreationProps } from "../../../models/projects";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import MultipleCategories from "./MultipleCategories";
import Buttons from "../../containers/ProjectCreationButtons";
import CircularProgress from "@material-ui/core/CircularProgress";
import Input from "../../containers/Input";
import "./projectcreation.scss";

const ProjectCreation = ({
  projectInputs,
  error,
  loading,
  categoriesLoader,
  setProjectImage,
  sendProject,
  categories,
  getCategories,
}: ProjectCreationProps) => {
  const fileInput = useRef<any>(null);
  const imagePreview = useRef<any>(null);

  useEffect(() => {
    getCategories();
  }, []);

  const showImagePreview = (input: HTMLInputElement) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(input.files[0]);

      reader.onload = (event) => {
        imagePreview.current.src = event.target?.result;
      };
    }
  };

  const onFileBrowserClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProjectImage(fileInput.current.files[0]);
    sendProject();
  };

  return (
    <>
      <input
        name="image"
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={() => {
          showImagePreview(fileInput.current);
        }}
      />
      <div className="maxiWrapper">
        <div className="project-container">
          <div className="project-container-form">
            {categoriesLoader ? (
              <div className="loader">
                <p>Loading</p>
                <CircularProgress size={15} />
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="project-creation-error-message">{error}</div>
                )}
                <section className="image-section">
                  <button
                    className="project-creation-button image"
                    onClick={onFileBrowserClick}
                  >
                    <FontAwesomeIcon icon={faPaperclip} />
                    <p>select an image</p>
                  </button>
                  <img
                    ref={imagePreview}
                    src="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
                    alt="your image"
                    className="image-preview"
                  />
                </section>
                <section className="title-section">
                  <div className="title-wrapper">
                    <h3 className="project-creation-title-entry">
                      Project Title :
                    </h3>
                  </div>
                  <Input
                    name="title"
                    placeHolder={capitalizeFirstLetter("title")}
                    inputValue={projectInputs["title"]}
                    formType="ProjectCreation"
                  />
                </section>

                <section className="description-section">
                  <h3 className="project-creation-title">
                    Project Description - try to be as detailed as possible :
                  </h3>

                  <Input
                    name="description"
                    inputValue={projectInputs["description"]}
                    formType="ProjectCreation"
                  />
                </section>

                <section className="category-section">
                  <h3 className="project-creation-title">Project category :</h3>
                  <MultipleCategories categories={categories} />
                </section>
                <section className="team-size-section">
                  <h3 className="project-creation-title">
                    Desired team size :
                  </h3>
                  <div className="project-creation-teamsize">
                    <Buttons />
                  </div>
                </section>

                <section className="submit-section">
                  <button
                    type="submit"
                    className="project-creation-button submit"
                    disabled={loading}
                  >
                    {!loading ? (
                      <p>Submit</p>
                    ) : (
                      <div className="loader">
                        <p>Loading</p>
                        <CircularProgress size={15} />
                      </div>
                    )}
                  </button>
                </section>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCreation;
