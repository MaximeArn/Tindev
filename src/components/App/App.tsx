/** @format */

import React from "react";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Register from "../Register/Register";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <div>
            <p>login</p>
          </div>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
}

export default App;
