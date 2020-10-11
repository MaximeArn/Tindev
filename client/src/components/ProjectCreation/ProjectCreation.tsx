import React, { FormEvent, MouseEvent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { ProjectCreationProps } from "../../models/states";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import Buttons from "../containers/ProjectCreationButtons";
import Input from "../containers/Input";
import "./projectcreation.scss";

const ProjectCreation = ({ projectInputs }: ProjectCreationProps) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const onFileBrowserClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fileInput.current && fileInput.current.click();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <input type="file" ref={fileInput} style={{ display: "none" }} />
      <div className="project-container">
        <h1 className="project-creation-title-entry">Project Title : </h1>
        <div className="project-creation">
          <form onSubmit={handleSubmit}>
            <Input
              name="title"
              placeHolder={capitalizeFirstLetter("title")}
              inputValue={projectInputs["title"]}
              formType="ProjectCreation"
            />
            <div className="separator"></div>

            <h1 className="project-creation-title">
              Project Description - try to be as detailed as possible :
            </h1>

            <Input
              name="description"
              inputValue={projectInputs["description"]}
              formType="ProjectCreation"
            />

            <button
              className="project-creation-button image"
              onClick={onFileBrowserClick}
            >
              <FontAwesomeIcon icon={faPaperclip} />
              Select An Image
            </button>

            <div className="separator"></div>

            <h1 className="project-creation-title">Choose a category :</h1>

            <Input name="category" formType="ProjectCreation" />

            <div className="separator"></div>

            <h1 className="project-creation-title">Desired team size :</h1>
            <div className="project-creation-teamsize">
              <Buttons />
            </div>
            <button type="submit" className="project-creation-button submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProjectCreation;
