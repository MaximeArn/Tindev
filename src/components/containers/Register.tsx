/** @format */

import { connect } from "react-redux";
import Register from "../Register/Register";
import { Authentication } from "../../models/states";

const mapState = ({ register, showRegister }: Authentication) => ({
  register,
  showRegister,
});

export default connect(mapState)(Register);
