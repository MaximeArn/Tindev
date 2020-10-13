/** @format */

import { connect } from "react-redux";
import App from "../App/App";

const mapDispatch = (dispatch: any) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
});
export default connect(null, mapDispatch)(App);
