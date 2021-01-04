import { connect } from "react-redux";
import { State } from "../../models/states";
import ForgotPassword from "../Auth/ForgotPassword/ForgotPassword";

const mapState = ({
  auth: {
    forgotPassword: { email: inputValue },
  },
}: State) => ({
  inputValue,
});

export default connect(mapState)(ForgotPassword);
