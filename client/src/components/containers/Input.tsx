import { connect } from "react-redux";
import Input from "../Input/Input";

const mapDispatch = (dispatch: any) => {
  const getRegisterInputValue = (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_REGISTER_INPUT_VALUE", inputName, inputValue });
  const getLoginInputValue = (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_LOGIN_INPUT_VALUE", inputName, inputValue });
  const getProjectCreationInputValue = (
    inputName: string,
    inputValue: string
  ) => {
    dispatch({ type: "GET_PROJECT_CREATION_VALUE", inputName, inputValue });
  };
  const getProjectDetailValue = (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_PROJECT_DETAIL_MODAL_VALUE", inputName, inputValue });
  const getForgotPasswordInputValue = (inputName: string, inputValue: string) =>
    dispatch({
      type: "GET_FORGOT_PASSWORD_INPUT_VALUE",
      inputName,
      inputValue,
    });
  const getResetPasswordInputValues = (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_RESET_PASSWORD_INPUT_VALUE", inputName, inputValue });

  return {
    getInputValues: {
      getRegisterInputValue,
      getLoginInputValue,
      getProjectCreationInputValue,
      getProjectDetailValue,
      getForgotPasswordInputValue,
      getResetPasswordInputValues,
    },
  };
};

export default connect(null, mapDispatch)(Input);
