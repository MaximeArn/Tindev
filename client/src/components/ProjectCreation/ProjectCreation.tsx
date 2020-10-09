import React from "react";
import "./projectcreation.scss";

const ProjectCreation = () => {
  return (
    <>
      <h1 className="project-creation-title-entry">Project Title : </h1>
      <div className="project-creation">
        <form>
          <input
            className="project-creation-input"
            type="text"
            name="title"
            placeholder="Title"
          />

          <h1 className="project-creation-title">
            Project Description - try to be as detailed as possible :
          </h1>
          <input
            name="description"
            className="project-creation-input textarea"
            type="textarea"
            placeholder="My project ..."
          />

          <h1 className="project-creation-title">Choose a category</h1>
          <select className="project-creation-input" name="category">
            <option selected value="option1">
              Option1
            </option>
            <option value="option2">Option1</option>
            <option value="option3">Option1</option>
            <option value="option4">Option1</option>
            <option value="option5">Option1</option>
            <option value="option6">Option1</option>
          </select>

          <h1 className="project-creation-title">Desired team size</h1>
          <div className="project-creation-teamsize">
            <button className="project-creation-button">2 people</button>
            <button className="project-creation-button">3 people</button>
            <button className="project-creation-button">4 people</button>
            <input
              className="project-creation-input size"
              type="text"
              name="size"
              placeholder="Type a value..."
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProjectCreation;
