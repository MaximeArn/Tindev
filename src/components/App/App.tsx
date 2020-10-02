/** @format */

import React from "react";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Register from "../containers/Register";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faGoogle, faCoffee);

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
