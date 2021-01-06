import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import ForgotPassword from "../Auth/ForgotPassword/ForgotPassword";

const mapState = ({
  auth: {
    forgotPassword: { email: inputValue },
  },
}: State) => ({
  inputValue,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_FORGOT_PASSWORD_MODAL_STATUS", modalStatus }),
});

export default connect(mapState, mapDispatch)(ForgotPassword);
