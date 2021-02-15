import React, { useEffect } from "react";
import { EditUserProfile, EditProfile } from "../../../models/users";
import ProfileField from "./ProfileField";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeletionModal from "./DeletionModal";
import "./editprofile.scss";

const EditProfile = ({
  user,
  isLoading,
  loader,
  deleteModal,
  deletionLoader,
  editProfile,
  getUserProfile,
  updateUserProfile,
  getEditProfileValue,
  resetEditProfileValue,
  deleteAccount,
  setDeleteModalStatus,
}: EditUserProfile) => {
  useEffect(() => {
    getUserProfile();
  }, []);

  const googleHidenFields = ["password", "username", "email"];

  return (
    <>
      {isLoading ? (
        <div className="profile-loader">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : (
        <>
          {deleteModal && (
            <DeletionModal
              setDeleteModalStatus={setDeleteModalStatus}
              deleteAccount={deleteAccount}
              loader={deletionLoader}
              accountId={user._id}
            />
          )}
          {user && (
            <div className="profile-wrapper">
              <div className="profile">
                <div className="profile-edit-container">
                  {Object.entries(editProfile).map(([prop, value]) => {
                    const key = prop as keyof typeof EditProfile;
                    return (
                      user.isGoogleAuth &&
                      !googleHidenFields.includes(key) && (
                        <div key={key} className="profile-container">
                          <ProfileField
                            updateUserProfile={updateUserProfile}
                            name={key}
                            loader={loader}
                            inputValue={value}
                            getEditProfileValue={getEditProfileValue}
                            resetEditProfileValue={resetEditProfileValue}
                            isGoogleAuth={user.isGoogleAuth}
                            value={
                              user[key]
                                ? user[key]
                                : key === "password"
                                ? "Change your password"
                                : null
                            }
                          />
                        </div>
                      )
                    );
                  })}
                </div>

                <button
                  className="profile-delete-button"
                  onClick={() => setDeleteModalStatus(true)}
                >
                  Close this account
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default EditProfile;
