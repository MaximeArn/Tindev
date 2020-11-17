/** @format */

import React, { useEffect, useRef } from "react";
import "./projectslist.scss";
import Project from "./Project";
import { Project as ProjectModel, Projects } from "../../../models/projects";
import sr from '../../../utils/scrollReveal'

const ProjectsList = ({ projects, error, getProjects }: Projects) => {
  const projectListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    getProjects();
    // sr.reveal(projectListRef.current, {
    //   delay: 1000,
    // }, 150);
  }, []);


  return (
    <>
      {error ? (
        <div className="project-list-error">{error}</div>
      ) : (
        <div className="projectsList" ref={projectListRef}>
          {projects.map((project: ProjectModel) => {
            return <Project key={project._id} {...project} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProjectsList;
