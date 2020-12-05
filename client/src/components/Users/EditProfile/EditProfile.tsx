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
            <div className="profile">
              <div className="profile-edit-container">
                {Object.entries(editProfile).map(([prop, value]) => {
                  const key = prop as keyof typeof EditProfile;
                  return (
                    <div key={key} className="profile-container">
                      <ProfileField
                        updateUserProfile={updateUserProfile}
                        name={key}
                        loader={loader}
                        inputValue={value}
                        getEditProfileValue={getEditProfileValue}
                        resetEditProfileValue={resetEditProfileValue}
                        value={
                          user[key]
                            ? user[key]
                            : key === "password"
                            ? "Change your password"
                            : null
                        }
                      />
                    </div>
                  );
                })}
              </div>
              <div
                className="profile-edit-delete-button"
                onClick={() => setDeleteModalStatus(true)}
              >
                <div>Close this account</div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default EditProfile;
