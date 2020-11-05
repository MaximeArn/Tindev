/** @format */

import React, { useEffect } from "react";
import "./projectDetail.scss";
import Modal from "../../containers/ProjectDetailModal";
import { ProjectDetailProps } from "../../../models/projects";
import Project from "./Project";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProjectDetail = ({
  project,
  isModalOpen,
  setModalStatus,
  verifyOwner,
  owner,
  error,
  getProjectDetails,
  loader,
}: ProjectDetailProps) => {
  useEffect(() => {
    getProjectDetails();
  }, []);

  useEffect(() => {
    project && verifyOwner(project.author);
  }, [project]);

  console.log(project);
  return (
    <>
      {isModalOpen && <Modal projectId={project && project._id} />}
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          {!loader ? (
            <Project
              setModalStatus={setModalStatus}
              {...project}
              owner={owner}
            />
          ) : (
            <div className="project-detail-loader">
              <p>Loading</p>
              <CircularProgress size={15} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProjectDetail;
