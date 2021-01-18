import React, { useEffect } from "react";
import { UserProfileProps } from "../../../models/users";
import CircularProgress from "@material-ui/core/CircularProgress";
import User from "../../containers/User";
import AdminPanel from "../../containers/Admin";
import "./userprofile.scss";

const UserProfile = ({
  admin,
  user: { _id: id, role },
  error,
  loader,
  getUser,
}: UserProfileProps) => {
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
            <>
              {id && (
                <>
                  <div className="user-profile">
                    <User />
                  </div>

                  {admin && !(role === "Admin") && (
                    <AdminPanel id={id} collection="user" />
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
