/** @format */

import React, { useEffect, useRef } from "react";
import Home from "../containers/Home";
import { Switch, Route } from "react-router-dom";
import { AppProps } from "../../models/states";
import NavBar from "../containers/NavBar";
import Register from "../containers/Register";
import Login from "../containers/Login";
import ProjectCreation from "../containers/ProjectCreation";
import ProjectDetail from "../containers/ProjectDetail";
import ManagePage from "../containers/ManageProject";
import UsersList from "../containers/UsersList";
import UserProfile from "../containers/UserProfile";
import Search from "../containers/Search";
import EditProject from "../containers/EditProject";
import "./app.scss";

function App({
  verifyToken,
  wsConnection,
  showNavbar,
  login,
  messages,
  register,
  getProjects,
  getUsers,
}: AppProps) {
  useEffect(() => {
    verifyToken();
    wsConnection();
    getProjects();
    getUsers();
  }, []);

  return (
    <>
      <div className="chat">
        <ul>
          {messages.map((message) => (
            <li>{message}</li>
          ))}
        </ul>
      </div>
      {showNavbar && <NavBar />}
      {login && <Login />}
      {register && <Register />}
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/project/create" component={ProjectCreation} />
        <Route path="/project/:slug/manage" component={ManagePage} />
        <Route path="/project/:slug/edit" component={EditProject} />
        <Route path="/project/:slug" component={ProjectDetail} />
        <Route exact path="/users" component={UsersList} />
        <Route exact path="/user/:username" component={UserProfile} />
        <Route path="/search" component={Search} />
      </Switch>
    </>
  );
}

export default App;
