import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import { OAuth2AuthorizationResponse } from "../../models/token";
import { withRouter } from "react-router-dom";
import App from "../App/App";
import { OwnProps } from "../../models/connect";

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

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  wsConnection: () => dispatch({ type: "SOCKET_CONNECTION" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
  getNotifications: () => dispatch({ type: "GET_NOTIFICATIONS" }),
  getChatWindows: () => dispatch({ type: "GET_CHAT_WINDOWS" }),
  onAccountClosing: () => dispatch({ type: "RESET_GLOBAL_STATE" }),
  verifyAuthorizationCode: (authorizationCode: OAuth2AuthorizationResponse) =>
    dispatch({ type: "GOOGLE_VERIFY_AUTHORIZATION_CODE", authorizationCode, history }),
});

export default withRouter(connect(mapState, mapDispatch)(App));
