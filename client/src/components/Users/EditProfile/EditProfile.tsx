import React, { useEffect } from "react";
import { EditUserProfile, EditProfile } from "../../../models/users";
import ProfileField from "./ProfileField";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeletionModal from "./DeletionModal";
import "./editprofile.scss";

const EditProfile = ({
  user,
  authType,
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
  const googleEditableFields = {
    firstname: "",
    lastname: "",
    city: "",
    age: "",
    experience: "",
    about: "",
    technos: [],
  };
  useEffect(() => {
    getUserProfile();
  }, []);

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
                  {Object.keys(
                    authType === "google" ? googleEditableFields : editProfile
                  ).map((prop) => {
                    const key = prop as keyof typeof EditProfile;
                    return (
                      <div key={key} className="profile-container">
                        <ProfileField
                          updateUserProfile={updateUserProfile}
                          name={key}
                          loader={loader}
                          inputValue={editProfile[key]}
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
