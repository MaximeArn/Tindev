import { connect } from "react-redux";
import Input from "../Input/Input";

const mapDispatch = (dispatch: any) => ({
  getRegisterInputValue: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_REGISTER_INPUT_VALUE", inputName, inputValue }),
  getLoginInputValue: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_LOGIN_INPUT_VALUE", inputName, inputValue }),
  getProjectInputValue: (inputName: string, inputValue: string) => {
    dispatch({ type: "GET_PROJECT_CREATION_VALUE", inputName, inputValue });
  },
  getProjectDetailValue: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_PROJECT_DETAIL_MODAL_VALUE", inputName, inputValue }),
  getForgotPasswordInputValue: (inputName: string, inputValue: string) =>
    dispatch({
      type: "GET_FORGOT_PASSWORD_INPUT_VALUE",
      inputName,
      inputValue,
    }),
  getResetPasswordInputValues: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_RESET_PASSWORD_INPUT_VALUE", inputName, inputValue }),
});

export default connect(null, mapDispatch)(Input);
