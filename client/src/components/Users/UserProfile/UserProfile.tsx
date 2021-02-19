import React, { useEffect } from "react";
import { UserProfileProps } from "../../../models/users";
import CircularProgress from "@material-ui/core/CircularProgress";
import User from "./User";
import AdminPanel from "../../containers/Admin";
import "./userprofile.scss";

const UserProfile = ({
  admin,
  user,
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
          {Object.keys(user).length && (
            <>
              <div className="user-profile">
                <User openChatWindow={openChatWindow} infos={infos} {...user} />
              </div>

              {admin && !(user.role === "Admin") && (
                <AdminPanel id={user._id} collection="user" />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserProfile;
