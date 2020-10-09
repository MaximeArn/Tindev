/** @format */

import React from "react";
import { projects } from "../../data/projects.json";
import Project from "./Project";
import "./projectsList.scss";
import { ProjectCard } from "../../models/projects";
import idGenerator from "../../utils/randomIdGenerator";
const ProjectsList = () => {
  const projectsList: ProjectCard[] = projects;
  return (
    <div className="projectsList">
      {projectsList.map((project: ProjectCard) => {
        return <Project key={idGenerator()} {...project} />;
      })}
    </div>
  );
};

export default ProjectsList;
