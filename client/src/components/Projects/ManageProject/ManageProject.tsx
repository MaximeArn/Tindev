/** @format */

import React, { RefObject, useRef, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Applicant from "../../containers/Applicant";
import DeclineModal from "../../containers/DeclineApplicantModal";
import "./managePage.scss";
import randomKey from "../../../utils/randomIdGenerator";
import { ApplicantRow, Project } from "../../../models/projects";

const ManageProject = ({ project }: any) => {
  const history = useHistory();

  const pushLastPath = () => {
    history.goBack();
  };

  return (
    <div className="applyPage">
      <span className="left-arrow" onClick={pushLastPath}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </span>
      <div className="applyPage-content">
        <div className="title-section">
          <h2>Manage your team</h2>
        </div>
        <div className="applicant-section">
          {project && project.applicants.length > 0 ? (
            project.applicants.map((applicant: ApplicantRow) => {
              console.log(applicant);
              return (
                <Applicant
                  projectId={project._id}
                  key={randomKey()}
                  {...applicant}
                />
              );
            })
          ) : (
            <div className="applicant-section-empty">No applicants yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProject;
