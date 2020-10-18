import React, { MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ProjectCreationButton } from "../../models/projects";

const Buttons = ({ getProjectTeamSize }: ProjectCreationButton) => {
  const handleButtonClick = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) => {
    getProjectTeamSize(currentTarget.value);
  };
  return (
    <>
      <button
        type="button"
        className="project-creation-button"
        value={2}
        onClick={handleButtonClick}
      >
        2 people
      </button>
      <button
        type="button"
        value={3}
        className="project-creation-button"
        onClick={handleButtonClick}
      >
        3 people
      </button>
      <button
        type="button"
        className="project-creation-button"
        value={4}
        onClick={handleButtonClick}
      >
        4 people
      </button>
      <button type="button" className="project-creation-button">
        <FontAwesomeIcon icon={faPlus} color="grey" />
      </button>
    </>
  );
};

export default Buttons;
