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
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { Link } from "react-router-dom";

const Applicant = ({
  project,
  _id: user,
  username,
  message,
  acceptApplicant,
  declineApplicant,
}: any) => {
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
            {capitalizeFirstLetter(username)}
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
            onClick={() => acceptApplicant(project, user)}
          >
            <FontAwesomeIcon icon={faCheck} />
          </i>
          <i
            className="icon-trash"
            onClick={() => declineApplicant(project, user)}
          >
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
