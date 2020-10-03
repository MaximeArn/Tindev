/** @format */

import React from "react";

const Project = ({ title, image }) => {
  return (
    <div className="projectCard">
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Project;
