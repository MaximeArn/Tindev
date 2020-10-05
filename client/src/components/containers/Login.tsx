/** @format */

import { connect } from "react-redux";
import Login from "../Login/Login";
import { AuthenticationState } from "../../models/states";

const mapState = ({ auth: { login } }: AuthenticationState) => ({ login });

export default connect(mapState)(Login);
