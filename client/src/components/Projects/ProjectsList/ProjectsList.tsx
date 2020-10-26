/** @format */

import React from "react";
import "./projectslist.scss";
import Project from "./Project";
import { Project as ProjectModel, Projects } from "../../../models/projects";

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
