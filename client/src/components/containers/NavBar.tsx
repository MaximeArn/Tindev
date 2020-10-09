import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { AuthenticationState } from "../../models/states";

const mapState = ({ auth: { user } }: AuthenticationState) => ({ user });

const mapDispatch = (dispatch: any) => ({
  logout: () => dispatch({ type: "DISCONNECT_USER" }),
});
export default connect(mapState, mapDispatch)(NavBar);
