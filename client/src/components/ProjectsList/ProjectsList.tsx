/** @format */

import React from "react";
import Project from "./Project";
import "./projectsList.scss";
import { Project as ProjectModel, Projects } from "../../models/projects";
import idGenerator from "../../utils/randomIdGenerator";

const ProjectsList = ({ projects }: Projects) => {
  return (
    <div className="projectsList">
      {projects.map((project: ProjectModel) => {
        return <Project key={idGenerator()} {...project} />;
      })}
    </div>
  );
};

export default ProjectsList;
