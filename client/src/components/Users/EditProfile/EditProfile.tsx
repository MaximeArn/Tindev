import React, { useEffect } from "react";
import { EditUserProfile, EditProfile } from "../../../models/users";
import ProfileField from "./ProfileField";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeletionModal from "./DeletionModal";
import "./editprofile.scss";

const EditProfile = ({
  user,
  error,
  success,
  isLoading,
  loader,
  deleteModal,
  deletionLoader,
  editProfile,
  getUserProfile,
  updateUserProfile,
  getEditProfileValue,
  resetEditProfileValue,
  resetMessages,
  deleteAccount,
  setDeleteModalStatus,
}: EditUserProfile) => {
  useEffect(() => {
    getUserProfile();
  }, []);

  useEffect(() => {
    (error || success) && setTimeout(() => resetMessages(), 3000);
  }, [error, success]);

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
          {success && <div className="profile-edit-success">{success}</div>}
          {error && <div className="profile-edit-error">{error}</div>}
          {user && (
<<<<<<< HEAD
            <div className="profileContainer">
              <div className="profile">
                {Object.entries(editProfile).map(([prop, value]) => {
                  const key = prop as keyof typeof EditProfile;
                  return (
                    <div key={key} className={`profile-container avatar-section ${key}`}>
=======
            <div className="profile">
              <div className="profile-edit-container">
                {Object.entries(editProfile).map(([prop, value]) => {
                  const key = prop as keyof typeof EditProfile;
                  return (
                    <div key={key} className="profile-container">
>>>>>>> dc1ba6c8920fd325b22230a5e2b73416cd10aa64
                      <ProfileField
                        updateUserProfile={updateUserProfile}
                        name={key}
                        loader={loader}
                        inputValue={value}
                        getEditProfileValue={getEditProfileValue}
<<<<<<< HEAD
=======
                        resetEditProfileValue={resetEditProfileValue}
>>>>>>> dc1ba6c8920fd325b22230a5e2b73416cd10aa64
                        value={
                          user[key]
                            ? user[key]
                            : key === "password"
                            ? "Change your password"
<<<<<<< HEAD
                            : "Not yet specified"
=======
                            : null
>>>>>>> dc1ba6c8920fd325b22230a5e2b73416cd10aa64
                        }
                      />
                    </div>
                  );
                })}
              </div>
<<<<<<< HEAD
=======
              <div
                className="profile-edit-delete-button"
                onClick={() => setDeleteModalStatus(true)}
              >
                <div>Close this account</div>
              </div>
>>>>>>> dc1ba6c8920fd325b22230a5e2b73416cd10aa64
            </div>
          )}
        </>
      )}
    </>
  );
};
export default EditProfile;
