/** @format */

import { connect } from "react-redux";
import Home from "../Home/Home";
import { State } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = ({
  loaders: { projectListLoader },
  auth: { user },
  success: { userDeletionSuccess },
}: State) => ({
  loader: projectListLoader,
  user,
  userDeletionSuccess,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
  onModalClosing: () => dispatch({ type: "RESET_GLOBAL_STATE" }),
});

export default connect(mapState, mapDispatch)(Home);
