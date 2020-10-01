/** @format */

import React from "react";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

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
          <div>
            <p>register</p>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
