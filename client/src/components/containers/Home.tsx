/** @format */

import { connect } from "react-redux";
import Home from "../Home/Home";
import { State } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = ({
  loaders: { projectListLoader },
  auth: { user },
}: State) => ({
  loader: projectListLoader,
  user,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
});

export default connect(mapState, mapDispatch)(Home);
