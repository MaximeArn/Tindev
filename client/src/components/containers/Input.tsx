import { connect } from "react-redux";
import Input from "../Input/Input";
import { State } from "../../models/states";

const mapState = ({ project: { categories } }: State) => ({
  categories,
});

const mapDispatch = (dispatch: any) => ({
  getRegisterInputValue: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_REGISTER_INPUT_VALUE", inputName, inputValue }),
  getLoginInputValue: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_LOGIN_INPUT_VALUE", inputName, inputValue }),
  getProjectInputValue: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_PROJECT_CREATION_VALUE", inputName, inputValue }),
});

export default connect(mapState, mapDispatch)(Input);
