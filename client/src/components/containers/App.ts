import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import { OAuth2Token } from "../../models/token";
import App from "../App/App";

const mapState = ({
  modal: {
    showNavbar,
    authModal: { login, register },
    forgotPasswordModal,
  },
  auth: { user },
  success: { userDeletionSuccess },
}: State) => ({
  user,
  showNavbar,
  login,
  register,
  forgotPasswordModal,
  userDeletionSuccess,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  wsConnection: () => dispatch({ type: "SOCKET_CONNECTION" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
  getNotifications: () => dispatch({ type: "GET_NOTIFICATIONS" }),
  getChatWindows: () => dispatch({ type: "GET_CHAT_WINDOWS" }),
  onAccountClosing: () => dispatch({ type: "RESET_GLOBAL_STATE" }),
  authorize: (authorizationToken: OAuth2Token) =>
    dispatch({ type: "GOOGLE_CONSENT_RESPONSE", authorizationToken }),
});

export default connect(mapState, mapDispatch)(App);
