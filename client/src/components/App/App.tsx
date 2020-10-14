/** @format */

import React, { useEffect  } from "react";
import Home from "../containers/Home";
import { Switch, Route } from "react-router-dom";
import { AppProps } from "../../models/states";
import NavBar from "../containers/NavBar";
import Register from "../containers/Register";
import Login from "../containers/Login";
import ProjectCreation from "../containers/ProjectCreation";

function App({ verifyToken }: AppProps) {
  useEffect(() => {
    verifyToken();
  }, []);
  return (
    <>
      <NavBar />
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
