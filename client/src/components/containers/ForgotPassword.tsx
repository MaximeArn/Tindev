import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import ForgotPassword from "../Auth/ForgotPassword/ForgotPassword";

const mapState = ({
  auth: {
    forgotPassword: { email: inputValue },
  },
  error: { forgotPasswordErrorMessage: error },
  success: { forgotPasswordSuccess: success },
  loaders: { forgotPasswordLoader: loader },
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
    dispatch({ type: "FORGOT_PASSWORD_SUCCESS_MESSAGE" });
    dispatch({
      type: "GET_FORGOT_PASSWORD_INPUT_VALUE",
      inputName: "email",
      inputValue: "",
    });
  },
  resetPassword: () => dispatch({ type: "RESET_USER_PASSWORD" }),
});

export default connect(mapState, mapDispatch)(ForgotPassword);
