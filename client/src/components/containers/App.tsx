/** @format */

import { connect } from "react-redux";
import { State } from "../../models/states";
import App from "../App/App";

const mapState = ({
  modal: {
    showNavbar,
    authModal: { login, register },
  },
}: State) => ({
  showNavbar,
  login,
  register,
});
const mapDispatch = (dispatch: any) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
});

export default connect(mapState, mapDispatch)(App);
