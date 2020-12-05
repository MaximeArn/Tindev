import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import App from "../App/App";

const mapState = ({
  modal: {
    showNavbar,
    authModal: { login, register },
  },
  auth: { user, verified },
}: State) => ({
  user,
  showNavbar,
  login,
  register,
  verified,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  wsConnection: () => dispatch({ type: "SOCKET_CONNECTION" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
  getNotifications: () => dispatch({ type: "GET_NOTIFICATIONS" }),
});

export default connect(mapState, mapDispatch)(App);
