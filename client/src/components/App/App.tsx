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
import NotFound from "../NotFound/NotFound";
import EditProject from "../containers/EditProject";
import Chat from "../containers/Chat";
import Footer from "../Footer/Footer";
import Legals from "../Legals/Legals";
import "./app.scss";

function App({
  verifyToken,
  wsConnection,
  showNavbar,
  login,
  register,
  getProjects,
  getUsers,
  user,
}: AppProps) {
  useEffect(() => {
    verifyToken();
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
    getProjects();
    wsConnection();
  }, [user]);

  return (
    <>
      {showNavbar && <NavBar />}
      {login && <Login />}
      {register && <Register />}
      {user && <Chat />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project/create" component={ProjectCreation} />
        <Route path="/project/:slug/manage" component={ManagePage} />
        <Route path="/project/:slug/edit" component={EditProject} />
        <Route path="/project/:slug" component={ProjectDetail} />
        <Route exact path="/users" component={UsersList} />
        <Route exact path="/user/:username" component={UserProfile} />
        <Route path="/search" component={Search} />
        <Route path="/legals" component={Legals} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
