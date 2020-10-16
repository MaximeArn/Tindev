/** @format */

import React from "react";
import "./projectDetail.scss";
import { ProjectDetailProps } from "../../models/projects";
import Project from "../ProjectsList/Project";

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return <>{project && <Project {...project} />}</>;
};

export default ProjectDetail;
