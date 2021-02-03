import EditProfile from "../Users/EditProfile/EditProfile";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";

const mapState = ({
  users: { user, editProfile },
  loaders: {
    userProfileEditionLoader: loader,
    userProfileLoader: isLoading,
    userAccountDeletionLoader: deletionLoader,
  },
  modal: { closeAccountModal: deleteModal },
}: State) => ({
  user,
  editProfile,
  isLoading,
  deleteModal,
  loader,
  deletionLoader,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => ({
  getUserProfile: () => dispatch({ type: "GET_USER_PROFILE" }),
  getEditProfileValue: (inputName: string, inputValue: string, key?: string) =>
    dispatch({
      type: "SET_USER_PROFILE_VALUES",
      inputName,
      inputValue,
      key,
    }),
  resetEditProfileValue: (inputName: string, key?: string) =>
    dispatch({
      type: "SET_USER_PROFILE_VALUES",
      inputName,
      inputValue: inputName === "technos" ? [] : "",
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
