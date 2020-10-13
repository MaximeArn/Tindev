/** @format */

import React, { useEffect } from "react";
import ProjectsList from "../containers/ProjectList";
import { HomeProps } from "../../models/states";

const Home = ({ getProjects }: HomeProps) => {
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <ProjectsList />
    </div>
  );
};

export default Home;
