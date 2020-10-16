/** @format */

import React from "react";
import "./projectDetail.scss";
import { ProjectDetailProps } from "../../models/projects";
import Project from "./Project";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProjectDetail = ({ project }: ProjectDetailProps) => {
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
};

export default ProjectDetail;
