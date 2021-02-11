import { connect } from "react-redux";
import Login from "../Auth/Login/Login";
import { State } from "../../models/states";
import { AuthModalSwapping } from "../../models/modal";
import { AnyAction, Dispatch } from "redux";
import { withRouter } from "react-router-dom";

const mapState = ({
  auth: { login, oAuth2AuthorizationUrl },
  error: {
    auth: { loginErrorMessage: error },
  },
  loaders: { loginLoader, newLinkLoader },
}: State) => ({
  login,
  error,
  loginLoader,
  newLinkLoader,
  oAuth2AuthorizationUrl,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  submitLogin: () => dispatch({ type: "SUBMIT_LOGIN" }),
  setForgotPasswordModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "FORGOT_PASSWORD_MODAL_SWAP", modalStatus }),
  closeModal: (modalStatus: boolean) => {
    dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
    dispatch({
      type: "SET_AUTH_MODAL_STATUS",
      modal: "login",
      modalStatus,
    });
  },
  googleAuthAttempt: () => dispatch({ type: "GOOGLE_CONNECTION" }),
  swapModal: ({ modal, modal2 }: AuthModalSwapping) => {
    dispatch({ type: "SWAP_AUTH_MODAL", modal, modal2, modalStatus: false });
    dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
  },
  sendActivationLink: (userId: string) =>
    dispatch({
      type: "SEND_NEW_LINK",
      userId,
      linkType: "accountActivation",
    }),
});

export default withRouter(connect(mapState, mapDispatch)(Login));
