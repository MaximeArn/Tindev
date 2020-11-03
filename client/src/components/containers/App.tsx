/** @format */

import { connect } from "react-redux";
import { State } from "../../models/states";
import App from "../App/App";

const mapState = ({
  modal: {
    showNavbar,
    authModal: { login, register },
  },
  auth: { user },
}: State) => ({
  user,
  showNavbar,
  login,
  register,
});
const mapDispatch = (dispatch: any) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  wsConnection: () => dispatch({ type: "GET_SOCKET_MESSAGE" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
  getUsers: () => dispatch({ type: "GET_USERS" }),
});

export default connect(mapState, mapDispatch)(App);
