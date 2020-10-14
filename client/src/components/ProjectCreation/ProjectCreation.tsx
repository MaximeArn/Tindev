/** @format */

import React, { FormEvent, MouseEvent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { ProjectCreationProps } from "../../models/states";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import Buttons from "../containers/ProjectCreationButtons";
import Input from "../containers/Input";
import "./projectcreation.scss";

const ProjectCreation = ({
  projectInputs,
  setProjectImage,
  sendProject,
}: ProjectCreationProps) => {
  const fileInput = useRef<any>(null);

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
      />
      <div className="maxiWrapper">
        <div className="project-container">
          <div className="project-container-form">
            <form onSubmit={handleSubmit}>
              <section className="title-section">
                <div className="title-wrapper">
                  <h3 className="project-creation-title-entry">
                    Project Title :{" "}
                  </h3>
                  <button
                    className="project-creation-button image"
                    onClick={onFileBrowserClick}
                  >
                    <FontAwesomeIcon icon={faPaperclip} />
                    <p>select an image</p>
                  </button>
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

                <Input name="categories" formType="ProjectCreation" />
              </section>
              <section className="team-size-section">
                <h3 className="project-creation-title">Desired team size :</h3>
                <div className="project-creation-teamsize">
                  <Buttons />
                </div>
              </section>

              <section className="submit-section">
                <button
                  type="submit"
                  className="project-creation-button submit"
                >
                  Submit
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
