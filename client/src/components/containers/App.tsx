/** @format */

import { connect } from "react-redux";
import { State } from "../../models/states";
import App from "../App/App";

const mapState = ({
  modal: {
    showNavbar,
    authModal: { login, register },
  },
  message: { messages, message },
}: State) => ({
  showNavbar,
  login,
  register,
  messages,
  message,
});
const mapDispatch = (dispatch: any) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  wsConnection: () => dispatch({ type: "SOCKET_CONNECTION" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
  getUsers: () => dispatch({ type: "GET_USERS" }),
  getMessageValue: (message: string) =>
    dispatch({ type: "SET_MESSAGE", message }),
});

export default connect(mapState, mapDispatch)(App);
