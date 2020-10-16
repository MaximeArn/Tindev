/** @format */

import React, { RefObject, useRef } from "react";
import "./applyPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import randomKey from "../../utils/randomIdGenerator";
import {
  faArrowLeft,
  faUserCircle,
  faTrashAlt,
  faComment,
  faCheck,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import capitalyzeFirstLetter from "../../utils/capitalizeFirstLetter";
import { Link } from "react-router-dom";

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
          {fakeApplicant.map(({ username, message }: any) => {
            const messageRef = useRef<HTMLDivElement>(null);

            return (
              <div key={randomKey()}>
                <div className="applicant-row">
                  <div className="applicant-row-user">
                    <span onClick={() => toggleMessage(messageRef)}>
                      <FontAwesomeIcon icon={faSortDown} />
                    </span>
                    <span className="applicant-row-user-icon">
                      <FontAwesomeIcon icon={faUserCircle} size="lg" />
                    </span>
                    <h3 className="applicant-row-user-username">
                      {capitalyzeFirstLetter(username)}
                    </h3>
                  </div>
                  <div className="applicant-row-profile">
                    <Link to={`/profile/${username}`}>view profile</Link>
                  </div>
                  <div className="applicant-row-actions">
                    <i className="icon-comment">
                      <FontAwesomeIcon icon={faComment} />
                    </i>
                    <i className="icon-check">
                      <FontAwesomeIcon icon={faCheck} />
                    </i>
                    <i className="icon-trash">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </i>
                  </div>
                </div>
                <div
                  className="applicant-message hide"
                  ref={messageRef}
                  data-author={username}
                >
                  <p>{message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
