import { connect } from "react-redux";
import { State } from "../../models/states";
import ResetPassword from "../ResetPassword/ResetPassword";

const mapState = ({ auth: { resetPassword: inputs } }: State) => ({
  inputs,
});
export default connect(mapState)(ResetPassword);
