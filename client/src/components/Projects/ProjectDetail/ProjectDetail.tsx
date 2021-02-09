import React, { useEffect } from "react";
import "./projectDetail.scss";
import ApplyModal from "../../containers/ProjectDetailModal";
import { ProjectDetailProps } from "../../../models/projects";
import Project from "./Project";
import CircularProgress from "@material-ui/core/CircularProgress";
import LeaveProjectModal from "./Modal/LeaveProjectModal";

const ProjectDetail = ({
  project,
  applyModal,
  leaveProjectModal,
  setApplyModalStatus,
  setLeaveProjectModal,
  verifyOwner,
  owner,
  getProjectDetails,
  loader,
  contributorLoader,
  contributing,
  leaveProject,
  role,
  location,
}: ProjectDetailProps) => {
  useEffect(() => {
    getProjectDetails();
  }, []);

  useEffect(() => {
    getProjectDetails();
  }, [location]);

  useEffect(() => {
    project && verifyOwner(project.author);
  }, [project]);

  return (
    <>
      {applyModal && <ApplyModal projectId={project && project._id} />}
      {leaveProjectModal && (
        <LeaveProjectModal
          id={project._id}
          leaveProject={leaveProject}
          setLeaveProjectModal={setLeaveProjectModal}
        />
      )}
      {loader ? (
        <div className="project-detail-loader">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : (
        <Project
          setApplyModalStatus={setApplyModalStatus}
          {...project}
          owner={owner}
          admin={role === "Admin"}
          contributing={contributing}
          setLeaveProjectModal={setLeaveProjectModal}
          contributorLoader={contributorLoader}
        />
      )}
    </>
  );
};

export default ProjectDetail;
