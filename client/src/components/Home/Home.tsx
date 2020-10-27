/** @format */

import React, { useEffect } from "react";
import ProjectsList from "../containers/ProjectList";
import VisitorPage from "../containers/VisitorPage";
import { HomeProps } from "../../models/states";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./home.scss";

const Home = ({ loader, user }: HomeProps) => {
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
        <VisitorPage />
      )}
    </>
  );
};

export default Home;
