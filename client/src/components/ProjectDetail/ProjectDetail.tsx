/** @format */

import React from "react";
import "./projectDetail.scss";
import ProjectComp from "../ProjectsList/Project";

const ProjectDetail = ({ project }: any) => {
  return <>{project && <ProjectComp {...project} />}</>;
};

export default ProjectDetail;
