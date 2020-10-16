/** @format */

import React, { RefObject, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Applicant from "./applicant";
import "./managePage.scss";

const ApplyPage = () => {
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

  return (
    <div className="applyPage">
      <div className="left-arrow">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </div>
      <div className="applyPage-content">
        <div className="title-section">
          <h2>manage your team</h2>
        </div>
        <div className="applicant-section">
          {fakeApplicant.map((applicant: any) => {
            const messageRef = useRef<HTMLDivElement>(null);

            return (
              <Applicant
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
