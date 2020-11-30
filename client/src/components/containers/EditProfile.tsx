import EditProfile from "../Users/EditProfile/EditProfile";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";

const mapState = ({
  users: { user, editProfile },
  error: { userProfileEditionErrorMessage: error },
  success: { userEditionSuccess: success },
  loaders: { userProfileEditionLoader: loader, userProfileLoader: isLoading },
  modal: { closeAccountModal: deleteModal },
}: State) => ({
  user,
  editProfile,
  error,
  success,
  isLoading,
  deleteModal,
  loader,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => ({
  getUserProfile: () => dispatch({ type: "GET_USER_PROFILE" }),
  resetMessages: () => {
    dispatch({ type: "USER_EDITION_SUCCESS_MESSAGE" });
    dispatch({ type: "SET_USER_PROFILE_EDITION_ERROR_HANDLER" });
  },
  getEditProfileValue: (inputName: string, inputValue: string, key?: string) =>
    dispatch({
      type: "SET_USER_PROFILE_VALUES",
      inputName,
      inputValue,
      key,
    }),
  updateUserProfile: (fieldName: string) =>
    dispatch({ type: "UPDATE_USER_PROFILE", fieldName }),
  deleteAccount: (id: string) =>
    dispatch({ type: "DELETE_USER_ACCOUNT", id, history }),
  setDeleteModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_ACCOUNT_DELETION_MODAL_STATUS", modalStatus }),
});

export default withRouter(connect(mapState, mapDispatch)(EditProfile));
