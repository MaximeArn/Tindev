/** @format */

import { connect } from "react-redux";
import Login from "../login/Login";
import { Authentication } from "../../models/states";

const mapState = ({ login, showLogin }: Authentication) => ({
  login,
  showLogin,
});

export default connect(mapState)(Login);
