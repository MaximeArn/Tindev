import EditProfile from "../Users/EditProfile/EditProfile";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";

const mapState = () => {};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getUserProfile: () => dispatch({ type: "GET_USER_PROFILE" }),
});

export default connect(null, mapDispatch)(EditProfile);
