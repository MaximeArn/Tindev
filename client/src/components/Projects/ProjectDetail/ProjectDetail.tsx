import React, { useEffect } from "react";
import "./projectDetail.scss";
import Modal from "../../containers/ProjectDetailModal";
import { ProjectDetailProps } from "../../../models/projects";
import Project from "./Project";
import CircularProgress from "@material-ui/core/CircularProgress";
import updateContent from "../../../utils/updateSelectedContent";
import { errorToast } from "../../../utils/toastify";

const ProjectDetail = ({
  project,
  isModalOpen,
  setModalStatus,
  verifyOwner,
  owner,
  error,
  getProjectDetails,
  loader,
  contributorLoader,
  contributing,
  leaveProject,
  role,
  content,
}: ProjectDetailProps) => {
  useEffect(() => {
    getProjectDetails();
  }, []);

  useEffect(() => {
    error && errorToast(error);
  }, [error]);

  useEffect(() => {
    updateContent(content, "project", getProjectDetails);
  }, [content]);

  useEffect(() => {
    project && verifyOwner(project.author);
  }, [project]);

  return (
    <>
      {isModalOpen && <Modal projectId={project && project._id} />}

      {loader ? (
        <div className="project-detail-loader">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : (
        <Project
          setModalStatus={setModalStatus}
          {...project}
          owner={owner}
          admin={role === "Admin"}
          contributing={contributing}
          leaveProject={leaveProject}
          contributorLoader={contributorLoader}
        />
      )}
    </>
  );
};

export default ProjectDetail;
