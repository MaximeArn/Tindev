import React, { FormEvent, MouseEvent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./projectcreation.scss";

const ProjectCreation = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const onFileBrowserClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { current: fileBrowser } = fileInput;
    event.preventDefault();
    fileBrowser && fileBrowser.click();
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
            <input
              className="project-creation-input"
              type="text"
              name="title"
              placeholder="Title"
            />

            <div className="separator"></div>

            <h1 className="project-creation-title">
              Project Description - try to be as detailed as possible :
            </h1>
            <input
              name="description"
              className="project-creation-input textarea"
              type="textarea"
              placeholder="My project ..."
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
            <select
              defaultValue="Option 1"
              className="project-creation-input"
              name="category"
            >
              <option value="option1">Option1</option>
              <option value="option2">Option1</option>
              <option value="option3">Option1</option>
              <option value="option4">Option1</option>
              <option value="option5">Option2</option>
              <option value="option6">Option1</option>
            </select>

            <div className="separator"></div>

            <h1 className="project-creation-title">Desired team size :</h1>
            <div className="project-creation-teamsize">
              <button className="project-creation-button">2 people</button>
              <button className="project-creation-button">3 people</button>
              <button className="project-creation-button">4 people</button>
              <button className="project-creation-button">
                <FontAwesomeIcon icon={faPlus} color="grey" />
              </button>
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
