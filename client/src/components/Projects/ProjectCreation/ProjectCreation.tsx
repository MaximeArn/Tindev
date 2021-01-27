import React, { FormEvent, MouseEvent, useEffect, useRef } from "react";
import { ProjectCreationProps } from "../../../models/projects";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import MultipleCategories from "../../containers/MultipleCategories";
import Buttons from "../../containers/ProjectCreationButtons";
import CircularProgress from "@material-ui/core/CircularProgress";
import Input from "../../containers/Input";
import "./projectcreation.scss";

const ProjectCreation = ({
  projectInputs,
  error,
  history: { listen },
  loading,
  setProjectImage,
  sendProject,
  onUrlChange,
}: ProjectCreationProps) => {
  const fileInput = useRef<any>(null);
  const imagePreview = useRef<any>(null);

  useEffect(() => {
    listen(() => {
      location.pathname !== "/project/create" && onUrlChange();
    });
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

  const fileBrowserClickHandler = (
    event: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
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
            <form onSubmit={handleSubmit}>
              {error && <div className="project-creation-error-message">{error}</div>}
              <section className="image-section">
                <div onClick={fileBrowserClickHandler}>
                  <img
                    ref={imagePreview}
                    src="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
                    alt="your image"
                    className="image-preview"
                  />
                </div>
              </section>
              <section className="title-section">
                <div className="title-wrapper">
                  <h3 className="project-creation-title-entry">PROJECT TITLE</h3>
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
                  PROJECT DESCRIPTION - try to be as detailed as possible
                </h3>

                <Input
                  name="description"
                  inputValue={projectInputs["description"]}
                  formType="ProjectCreation"
                />
              </section>

              <section className="category-section">
                <h3 className="project-creation-title">PROJECT CATEGORY</h3>
                <MultipleCategories
                  toUpdate="projectCreationCategories"
                  inputName="categories"
                />
              </section>

              <section className="team-size-section">
                <h3 className="project-creation-title">DESIRED TEAM SIZE</h3>
                <div className="project-creation-teamsize">
                  <Buttons name="size" />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCreation;
