/** @format */

import { connect } from "react-redux";
import Register from "../Register/Register";
import { AuthenticationState } from "../../models/states";

const mapState = ({ auth: { register } }: AuthenticationState) => ({
  register,
});

export default connect(mapState)(Register);
