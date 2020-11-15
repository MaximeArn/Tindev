import EditProfile from "../Users/EditProfile/EditProfile";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";

const mapState = ({ users: { user, editProfile } }: State) => ({
  user,
  editProfile,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getUserProfile: () => dispatch({ type: "GET_USER_PROFILE" }),
  getEditProfileValue: (inputName: string, inputValue: string) =>
    dispatch({ type: "SET_USER_PROFILE_VALUES", inputName, inputValue }),
  updateUserProfile: (fieldName: string) =>
    dispatch({ type: "UPDATE_USER_PROFILE", fieldName }),
});

export default connect(mapState, mapDispatch)(EditProfile);
