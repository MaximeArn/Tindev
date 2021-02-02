import React, { useEffect } from "react";
import { UserProfileProps } from "../../../models/users";
import CircularProgress from "@material-ui/core/CircularProgress";
import User from "../../containers/User";
import AdminPanel from "../../containers/Admin";
import "./userprofile.scss";

const UserProfile = ({
  admin,
  user,
  error,
  loader,
  content,
  getUser,
  openChatWindow,
}: UserProfileProps) => {
  console.log("AH OKI USER DETAILS");
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    content && getUser();
  }, [content]);
  return (
    <>
      {loader ? (
        <div className="profile-loader">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : (
        <>
          {error ? (
            <div className="user-profile-error">{error}</div>
          ) : (
            <>
              {user && (
                <>
                  <div className="user-profile">
                    <User openChatWindow={openChatWindow} {...user} />
                  </div>

                  {admin && !(user.role === "Admin") && (
                    <AdminPanel id={user._id} collection="user" />
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserProfile;
