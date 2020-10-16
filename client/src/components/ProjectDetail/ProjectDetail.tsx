import React from "react";
import "./projectDetail.scss";
import Modal from "../containers/ProjectDetailModal";
import { ProjectDetailProps } from "../../models/projects";
import Project from "./Project";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <>
      <div className="project-detail-modal">
        <Modal project={project && project._id} />
      </div>
      {/* {project ? (
        <Project {...project} />
      ) : (
        <div className="projectDetail">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      )} */}
    </>
  );
};

export default ProjectDetail;
