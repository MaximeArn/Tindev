import React, { useEffect, useRef } from "react";
import "./projectslist.scss";
import Project from "./Project";
import { errorToast } from "../../../utils/toastify";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Project as ProjectModel, Projects } from "../../../models/projects";

const ProjectsList = ({ projects, error, getProjects, loader }: Projects) => {
  const projectListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    error && errorToast(error);
  }, [error]);

  return (
    <>
      {loader && (
        <div className="project-loading-button">
          <p className="loading-message">Loading</p>
          <CircularProgress size={15} />
        </div>
      )}
      <div className="projectsList" ref={projectListRef}>
        {projects.map((project: ProjectModel) => {
          return <Project key={project._id} {...project} />;
        })}
      </div>
    </>
  );
};

export default ProjectsList;
