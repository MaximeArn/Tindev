/** @format */

import React from "react";
import "./projectDetail.scss";
<<<<<<< HEAD
import { ProjectDetailProps } from "../../models/projects";
import Project from "../ProjectsList/Project";

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return <>{project && <Project {...project} />}</>;
=======
import Project from "./Project";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProjectDetail = ({ project }: any) => {
  return (
    <>
      {project ? (
        <Project {...project} />
      ) : (
        <div className="projectDetail">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      )}
    </>
  );
>>>>>>> feature/project-detail
};

export default ProjectDetail;
