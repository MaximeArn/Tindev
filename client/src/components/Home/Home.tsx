import React from "react";
import ProjectsList from "../containers/ProjectList";
import { HomeProps } from "../../models/states";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./home.scss";

const Home = ({ loader }: HomeProps) => {
  return (
    <div>
      {loader && (
        <div className="project-loading-button">
          <p className="loading-message">Loading</p>
          <CircularProgress size={15} />
        </div>
      )}
      <ProjectsList />
    </div>
  );
};

export default Home;
