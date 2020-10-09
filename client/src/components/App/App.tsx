/** @format */

import React, { useEffect } from "react";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";
import { AppState } from "../../models/states";
import NavBar from "../containers/NavBar";
import Register from "../containers/Register";
import Login from "../containers/Login";
import ProjectCreation from "../ProjectCreation/ProjectCreation";

function App({ verifyToken }: AppState) {
  useEffect(() => {
    verifyToken();
  }, []);
  return (
    <>
      {/* <NavBar /> */}
      {/* <Home /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/project/create">
          <ProjectCreation />
        </Route>
      </Switch>
    </>
  );
}

export default App;
