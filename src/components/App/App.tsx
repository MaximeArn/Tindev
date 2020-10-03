/** @format */

import React from "react";
import Home from "../Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Register from "../containers/Register";
import Login from "../containers/Login";

function App() {
  return (
    <>
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
      </Switch>
      <NavBar />
    </>
  );
}

export default App;
