/** @format */

import React from "react";
import Project from "./Project";
import "./projectsList.scss";
import { Project as ProjectModel, Projects } from "../../../models/projects";
import idGenerator from "../../../utils/randomIdGenerator";

const ProjectsList = ({ projects, error }: Projects) => {
  return (
    <>
      {error ? (
        <div className="project-list-error">{error}</div>
      ) : (
        <div className="projectsList">
          {projects.map((project: ProjectModel) => {
            return <Project key={project._id} {...project} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProjectsList;
