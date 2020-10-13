/** @format */

import React, { useEffect } from "react";

import ProjectsList from "../containers/ProjectList";

const Home = () => {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      <ProjectsList />
    </div>
  );
};

export default Home;
