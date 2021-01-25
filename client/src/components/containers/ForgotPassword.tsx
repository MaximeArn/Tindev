import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import ForgotPassword from "../Auth/ForgotPassword/ForgotPassword";

const mapState = ({
  auth: {
    forgotPassword: { email: inputValue },
  },
  error: { forgotPasswordErrorMessage: error },
  success: { activationLinkSuccess: success },
  loaders: { activationLinkLoader: loader },
}: State) => ({
  inputValue,
  error,
  success,
  loader,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setModalStatus: (modalStatus: boolean) => {
    dispatch({ type: "SET_FORGOT_PASSWORD_MODAL_STATUS", modalStatus });
    dispatch({ type: "FORGOT_PASSWORD_ERROR_HANDLER" });
    dispatch({ type: "ACTIVATION_LINK_SUCCESS_MESSAGE" });
    dispatch({
      type: "GET_FORGOT_PASSWORD_INPUT_VALUE",
      inputName: "email",
      inputValue: "",
    });
  },
  resetPassword: (email: string) =>
    dispatch({ type: "SEND_ACCOUNT_ACTIVATION_LINK", linkType: "resetPassword", email }),
});

export default connect(mapState, mapDispatch)(ForgotPassword);
