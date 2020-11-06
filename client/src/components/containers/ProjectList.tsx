/** @format */

import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import ProjectList from "../Projects/ProjectsList/ProjectsList";

const mapState = (state: State) => {
  const { projects } = state.project;
  const { projectListErrorMessage: error } = state.error;
  return { projects, error };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
});

export default connect(mapState, mapDispatch)(ProjectList);
