/** @format */

import React from "react";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";
import NavBar from "../containers/NavBar";
import Register from "../containers/Register";
import Login from "../containers/Login";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Switch>
        {/* <Route exact path="/"></Route> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
}

export default App;
