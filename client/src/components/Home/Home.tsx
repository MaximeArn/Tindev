/** @format */

import React from "react";
import ProjectsList from "../containers/ProjectList";
import VisitorPage from "../containers/VisitorPage";
import { HomeProps } from "../../models/states";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccountDeletionModal from "../Users/EditProfile/DeletionSuccess";
import "./home.scss";

const Home = ({
  loader,
  user,
  userDeletionSuccess,
  onModalClosing,
}: HomeProps) => {
  return (
    <>
      {user ? (
        <div>
          {loader && (
            <div className="project-loading-button">
              <p className="loading-message">Loading</p>
              <CircularProgress size={15} />
            </div>
          )}
          <ProjectsList />
        </div>
      ) : (
        <>
          {userDeletionSuccess && (
            <AccountDeletionModal
              success={userDeletionSuccess}
              onModalClosing={onModalClosing}
            />
          )}
          <VisitorPage />
        </>
      )}
    </>
  );
};

export default Home;
