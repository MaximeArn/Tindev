/** @format */

import React from "react";
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

const applicant = ({ username, message, toggleMessage, messageRef }: any) => {
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
};

export default applicant;
