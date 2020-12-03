import React, { useEffect } from "react";
import { UserProfileProps } from "../../../models/users";
import CircularProgress from "@material-ui/core/CircularProgress";
import User from "../../containers/User";
import "./userprofile.scss";

const UserProfile = ({ error, loader, getUser }: UserProfileProps) => {
  useEffect(() => {
    getUser();
  }, []);

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
            <div className="user-profile">
              <User />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserProfile;
