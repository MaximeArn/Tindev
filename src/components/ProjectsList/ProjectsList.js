/** @format */

import React from "react";
import { projects } from "../../data/projects.json";
import Project from "./Project";
import "./projectsList.scss";

const ProjectsList = () => {
  console.log(projects);

  return (
    <div className="projectsList">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
