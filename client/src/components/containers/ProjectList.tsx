/** @format */

import { connect } from "react-redux";
import { State } from "../../models/states";
import ProjectList from "../Projects/ProjectsList/ProjectsList";

const mapState = (state: State) => {
  const { projects } = state.project;
  const { projectListErrorMessage: error } = state.error;
  return { projects, error };
};

export default connect(mapState)(ProjectList);
