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
});

export default connect(mapState, mapDispatch)(EditProfile);
