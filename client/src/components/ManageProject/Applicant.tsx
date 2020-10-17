/** @format */

import React, { RefObject, useRef } from "react";
import randomKey from "../../utils/randomIdGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faTrashAlt,
  faComment,
  faCheck,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import capitalyzeFirstLetter from "../../utils/capitalizeFirstLetter";
import { Link } from "react-router-dom";

const Applicant = ({ project, username, message, acceptApplicant }: any) => {
  const messageRef = useRef<HTMLDivElement>(null);

  const toggleMessage = () => {
    const { current } = messageRef;
    current && current.classList.toggle("hide");
  };

  return (
    <div key={randomKey()}>
      <div className="applicant-row">
        <div className="applicant-row-user">
          <span onClick={() => toggleMessage()}>
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
          <i
            className="icon-check"
            onClick={() => acceptApplicant(project, username)}
          >
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
};

export default Applicant;
