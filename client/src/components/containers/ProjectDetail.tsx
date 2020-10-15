/** @format */

import { connect } from "react-redux";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import { State } from "../../models/states";
import { withRouter } from "react-router-dom";
import slugify from "../../utils/slugify";

const mapState = (state: State, { match }: any) => {
  const { slug } = match.params;
  const { projects } = state.project;
  const project = projects.find(({ title }) => slugify(title) === slug);
  return { project };
};

export default withRouter(connect(mapState)(ProjectDetail));
