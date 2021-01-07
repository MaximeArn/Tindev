import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import ResetPassword from "../ResetPassword/ResetPassword";

const mapState = ({ auth: { resetPassword: inputs } }: State) => ({
  inputs,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getInputValues: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_RESET_PASSWORD_INPUT_VALUE", inputName, inputValue }),
});
export default connect(mapState, mapDispatch)(ResetPassword);
