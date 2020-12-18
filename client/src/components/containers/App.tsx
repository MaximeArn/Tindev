import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import App from "../App/App";

const mapState = ({
  modal: {
    showNavbar,
    authModal: { login, register },
  },
  auth: { user },
  success: { userDeletionSuccess },
  token: { validity },
}: State) => ({
  user,
  showNavbar,
  login,
  register,
  userDeletionSuccess,
  validity,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  wsConnection: () => dispatch({ type: "SOCKET_CONNECTION" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
  getNotifications: () => dispatch({ type: "GET_NOTIFICATIONS" }),
  getChatWindows: () => dispatch({ type: "GET_CHAT_WINDOWS" }),
  onAccountClosing: () => dispatch({ type: "RESET_GLOBAL_STATE" }),
});

export default connect(mapState, mapDispatch)(App);
