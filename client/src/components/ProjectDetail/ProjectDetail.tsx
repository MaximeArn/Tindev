import React from "react";
import "./projectDetail.scss";
import Modal from "../containers/ProjectDetailModal";
import { ProjectDetailProps } from "../../models/projects";
import Project from "./Project";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProjectDetail = ({
  project,
  isModalOpen,
  setModalStatus,
}: ProjectDetailProps) => {
  console.log(isModalOpen);
  return (
    <>
      {isModalOpen && (
        <div className="project-detail-modal">
          <Modal project={project && project._id} />
        </div>
      )}

      {project ? (
        <Project setModalStatus={setModalStatus} {...project} />
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
