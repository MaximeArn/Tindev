/** @format */

import React, { RefObject, useRef, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Applicant from "./applicant";
import "./managePage.scss";
import { Projects } from "../../models/projects";
import randomKey from "../../utils/randomIdGenerator";

const ApplyPage = ({ project }: any) => {
  console.log("projet : ", project);
  const { applicant } = project;
  console.log("applicant", applicant);

  const history = useHistory();
  const fakeApplicant = [
    {
      username: "liv",
      message:
        "this project is very interesting and I would love to participate in it",
    },
    {
      username: "popo",
      message:
        "this project is very interesting and I would love to participate in it",
    },
    {
      username: "virgile",
      message:
        "this project is very interesting and I would love to participate in it",
    },
    {
      username: "sylvain",
      message:
        "this project is very interesting and I would love to participate in it",
    },
    {
      username: "tanguy",
      message:
        "this project is very interesting and I would love to participate in it",
    },
    {
      username: "antho",
      message:
        "this project is very interesting and I would love to participate in it",
    },
    {
      username: "maxime",
      message:
        "this project is very interesting and I would love to participate in it",
    },
  ];

  const toggleMessage = (messageRef: RefObject<HTMLDivElement>) => {
    const { current } = messageRef;
    current && current.classList.toggle("hide");
  };

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
            const messageRef = useRef<HTMLDivElement>(null);

            return (
              <Applicant
                key={randomKey()}
                {...applicant}
                toggleMessage={toggleMessage}
                messageRef={messageRef}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
