/** @format */

import { connect } from "react-redux";
import { State } from "../../models/states";
import App from "../App/App";

const mapState = ({ auth: { isModalOpen } }: State) => ({ isModalOpen });
const mapDispatch = (dispatch: any) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
});

export default connect(mapState, mapDispatch)(App);
