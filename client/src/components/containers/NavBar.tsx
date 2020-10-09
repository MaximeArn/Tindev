import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { AuthenticationState } from "../../models/states";

const mapState = ({ auth: { user } }: AuthenticationState) => ({ user });
export default connect(mapState)(NavBar);
