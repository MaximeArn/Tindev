/** @format */

import { connect } from "react-redux";
import { State } from "../../models/states";
import App from "../App/App";

const mapState = ({
  modal: {
    showNavbar,
    authModal: { login, register },
  },
  message: { messages },
}: State) => ({
  showNavbar,
  login,
  register,
  messages,
});
const mapDispatch = (dispatch: any) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
  getUsers: () => dispatch({ type: "GET_USERS" }),
});

export default connect(mapState, mapDispatch)(App);
