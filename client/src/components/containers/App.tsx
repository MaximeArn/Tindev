/** @format */

import { connect } from "react-redux";
import App from "../App/App";

const mapDispatch = (dispatch: any) => ({
  verifyToken: () => dispatch({ type: "TOKEN_VALIDATION" }),
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
});
export default connect(null, mapDispatch)(App);
