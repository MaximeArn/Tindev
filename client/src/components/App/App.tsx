import React, { useEffect } from "react";
import ProjectList from "../containers/ProjectList";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppProps } from "../../models/states";
import NavBar from "../containers/NavBar";
import Register from "../containers/Register";
import Login from "../containers/Login";
import ProjectCreation from "../containers/ProjectCreation";
import ProjectDetail from "../containers/ProjectDetail";
import ManageProject from "../containers/ManageProject";
import UsersList from "../containers/UsersList";
import UserProfile from "../containers/UserProfile";
import Search from "../containers/Search";
import NotFound from "../NotFound/NotFound";
import EditProject from "../containers/EditProject";
import Chat from "../containers/Chat";
import Footer from "../Footer/Footer";
import Legals from "../Legals/Legals";
import EditProfile from "../containers/EditProfile";
import VisitorPage from "../containers/VisitorPage";
import AccountDeletionModal from "../Users/EditProfile/DeletionSuccess";
import AccountVerification from "../containers/Verification";
import ForgotPassword from "../containers/ForgotPassword";
import ResetPassword from "../containers/ResetPassword";
import CategoriesList from "../Categories/CategoriesList";
import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

function App({
  verifyToken,
  wsConnection,
  showNavbar,
  login,
  register,
  forgotPasswordModal,
  userDeletionSuccess,
  getProjects,
  getNotifications,
  getChatWindows,
  user,
  onAccountClosing,
}: AppProps) {
  useEffect(() => {
    verifyToken();
  }, []);

  useEffect(() => {
    if (user) {
      getProjects();
      wsConnection();
      getNotifications();
      getChatWindows();
    }
  }, [user]);

  return (
    <>
      {showNavbar && <NavBar />}
      {login && <Login />}
      {register && <Register />}
      {forgotPasswordModal && <ForgotPassword />}
      {user ? (
        <>
          <Chat />
          <Switch>
            <Route exact path="/" component={ProjectList} />
            <Route exact path="/project/create" component={ProjectCreation} />
            <Route path="/project/:slug/manage" component={ManageProject} />
            <Route path="/project/:slug/edit" component={EditProject} />
            <Route path="/project/:slug" component={ProjectDetail} />
            <Route exact path="/users" component={UsersList} />
            <Route exact path="/user/:username" component={UserProfile} />
            <Route exact path="/categories" component={CategoriesList} />
            <Route path="/search" component={Search} />
            <Route path="/account" component={EditProfile} />
            <Route path="/legals" component={Legals} />
            <Route component={NotFound} />
          </Switch>
        </>
      ) : (
        <>
          {userDeletionSuccess && (
            <AccountDeletionModal
              success={userDeletionSuccess}
              onAccountClosing={onAccountClosing}
            />
          )}
          <Switch>
            <Route exact path="/" component={VisitorPage} />
            <Route exact path="/account/verify/:token" component={AccountVerification} />
            <Route
              exact
              path="/account/reset_password/:token"
              component={ResetPassword}
            />
            <Route component={NotFound} />
          </Switch>
        </>
      )}
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
