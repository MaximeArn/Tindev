import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Buttons = () => {
  return (
    <>
      <button className="project-creation-button">2 people</button>
      <button className="project-creation-button">3 people</button>
      <button className="project-creation-button">4 people</button>
      <button className="project-creation-button">
        <FontAwesomeIcon icon={faPlus} color="grey" />
      </button>
    </>
  );
};

export default Buttons;
