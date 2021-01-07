import { connect } from "react-redux";
import { State } from "../../models/states";
import ResetPassword from "../ResetPassword/ResetPassword";

const mapState = ({
  auth: {
    resetPassword: { password, confirmPassword },
  },
}: State) => ({
  password,
  confirmPassword,
});
export default connect(mapState)(ResetPassword);
