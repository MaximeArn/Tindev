/** @format */

import React, { RefObject, useRef, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Applicant from "../containers/Applicant";
import "./managePage.scss";
import randomKey from "../../utils/randomIdGenerator";

const ManagePage = ({ project }: any) => {
  const { applicant } = project;
  const history = useHistory();

  const pushLastPath = () => {
    history.goBack();
  };

  return (
    <div className="applyPage">
      <Link className="left-arrow" onClick={pushLastPath}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Link>
      <div className="applyPage-content">
        <div className="title-section">
          <h2>manage your team</h2>
        </div>
        <div className="applicant-section">
          {applicant.map((applicant: any) => {
            return (
              <Applicant
                project={project._id}
                key={randomKey()}
                {...applicant}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManagePage;
