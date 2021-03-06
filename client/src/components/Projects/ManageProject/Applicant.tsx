/** @format */

import React, { useRef } from "react";
import randomKey from "../../../utils/randomIdGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faTrashAlt,
  faComment,
  faCheck,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import DeclineModal from "../../containers/DeclineApplicantModal";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ApplicantProps } from "../../../models/projects";

const Applicant = ({
  projectId,
  _id: userId,
  username,
  message,
  acceptApplicant,
  setModalStatus,
  declineApplicantModal: { isModalOpen, applicant },
  isLoading: { loader, applicantId },
  openChatWindow,
}: ApplicantProps) => {
  const messageRef = useRef<HTMLDivElement>(null);

  const toggleMessage = () => {
    const { current } = messageRef;
    current && current.classList.toggle("hide");
  };

  return (
    <>
      {isModalOpen && userId == applicant && (
        <DeclineModal projectId={projectId} userId={userId} />
      )}
      <div key={randomKey()}>
        {loader && applicantId == userId ? (
          <div className="applicant-row">
            <div className="applicant-row-user">
              <span className="applicant-row-user-icon">
                <FontAwesomeIcon icon={faUserCircle} size="lg" />
              </span>
              <h3 className="applicant-row-user-username">
                {capitalizeFirstLetter(username)}
              </h3>
            </div>
            <div className="loader">
              <p>Loading</p>
              <CircularProgress size={15} />
            </div>
          </div>
        ) : (
          <>
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
                <Link to={`/user/${username}`}>view profile</Link>
              </div>
              <div className="applicant-row-actions">
                <i
                  className="icon comment"
                  onClick={() => openChatWindow(username, userId)}
                >
                  <FontAwesomeIcon icon={faComment} />
                </i>
                <i
                  className="icon check"
                  onClick={() =>
                    acceptApplicant({ projectId, userId, username })
                  }
                >
                  <FontAwesomeIcon icon={faCheck} />
                </i>
                <i
                  className="icon trash"
                  onClick={() => setModalStatus(true, userId)}
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
          </>
        )}
      </div>
    </>
  );
};

export default Applicant;
