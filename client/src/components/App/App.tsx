/** @format */

import React, { useEffect } from "react";
import Home from "../containers/Home";
import { Switch, Route } from "react-router-dom";
import { AppProps } from "../../models/states";
import NavBar from "../containers/NavBar";
import Register from "../containers/Register";
import Login from "../containers/Login";
import ProjectCreation from "../containers/ProjectCreation";
import ProjectDetail from "../containers/ProjectDetail";
import ManagePage from "../containers/ManageProject";

function App({ verifyToken, showNavbar, getProjects }: AppProps) {
  useEffect(() => {
    verifyToken();
    getProjects();
  }, []);
  return (
    <>
      {showNavbar && <NavBar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/project/create" component={ProjectCreation} />
        <Route path="/project/:slug/manage" component={ManagePage} />
        <Route path="/project/:slug" component={ProjectDetail} />
      </Switch>
    </>
  );
}

export default App;
