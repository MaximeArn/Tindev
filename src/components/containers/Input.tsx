import { connect } from "react-redux";
import RegisterInput from "../Input/Input";

const mapDispatch = (dispatch: any) => ({
  getInputValue: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_INPUT_VALUE", inputName, inputValue }),
});

export default connect(null, mapDispatch)(RegisterInput);
