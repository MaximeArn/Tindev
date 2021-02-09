import React, { useEffect } from "react";
import { UserProfileProps } from "../../../models/users";
import CircularProgress from "@material-ui/core/CircularProgress";
import User from "./User";
import AdminPanel from "../../containers/Admin";
import "./userprofile.scss";

const UserProfile = ({
  admin,
<<<<<<< HEAD
  user,
  error,
=======
  user: { _id: id, role },
>>>>>>> feature/password-strength
  loader,
  getUser,
  openChatWindow,
  location,
}: UserProfileProps) => {
  const { role, avatar, _id, username, email, ...infos } = user;

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getUser();
  }, [location]);
  return (
    <>
      {loader ? (
        <div className="profile-loader">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : (
        <>
          {id && (
            <>
<<<<<<< HEAD
              {user && (
                <>
                  <div className="user-profile">
                    <User openChatWindow={openChatWindow} infos={infos} {...user} />
                  </div>

                  {admin && !(user.role === "Admin") && (
                    <AdminPanel id={user._id} collection="user" />
                  )}
                </>
=======
              <div className="user-profile">
                <User />
              </div>

              {admin && !(role === "Admin") && (
                <AdminPanel id={id} collection="user" />
>>>>>>> feature/password-strength
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserProfile;
