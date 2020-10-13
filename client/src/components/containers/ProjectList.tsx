/** @format */

import { connect } from "react-redux";
import { State } from "../../models/states";
import ProjectList from "../ProjectsList/ProjectsList";

const mapState = (state: State) => {
  const { projects } = state.project;
  return { projects };
};

export default connect(mapState)(ProjectList);
