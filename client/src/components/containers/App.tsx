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
  message: { messages, message },
}: State) => ({
  user,
  showNavbar,
  login,
  register,
  messages,
  message,
});
const mapDispatch = (dispatch: any) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  wsConnection: () => dispatch({ type: "GET_SOCKET_MESSAGE" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
  getUsers: () => dispatch({ type: "GET_USERS" }),
  getMessageValue: (message: string) =>
    dispatch({ type: "SET_CHAT_MESSAGE", message }),
  sendMessage: () => dispatch({ type: "SEND_CHAT_MESSAGE" }),
});

export default connect(mapState, mapDispatch)(App);
