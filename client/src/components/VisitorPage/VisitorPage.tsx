import React from "react";
import { url, homeImage } from "../../environments/api";
import SuspendedAccountModal from "./SuspendedAccountModal";
import { VisitorPageProps } from "../../models/states";
import "./visitorPage.scss";

const VisitorPage = ({
  redirectionModal,
  message,
  openModal,
  setRedirectionModalStatus,
}: VisitorPageProps) => {
  return (
    <div
      className="visitor-page"
      style={{
        backgroundImage: `url(${url}/uploads/home/${homeImage})`,
      }}
    >
      {redirectionModal && (
        <SuspendedAccountModal
          message={message}
          setModalStatus={setRedirectionModalStatus}
        />
      )}
      <div className="black-filter"></div>
      <div className="content">
        <div className="text">
          <h2 className="title">Welcome to tindev</h2>
          <p className="welcome-text">
            Social network to bring devs together with a shared project. You can also
            create a project yourself, or, join another user's project. You will be able
            to filter any project according to your criterias and discuss with other users
            through a chat or create groups to communicate easily with each others.
          </p>
        </div>
        <div className="buttons-section">
          <button onClick={() => openModal("login", true)}>Login</button>
          <button onClick={() => openModal("register", true)}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default VisitorPage;
