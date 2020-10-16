/** @format */

import { connect } from "react-redux";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import { State } from "../../models/states";
import { ProjectDetailProps as OwnProps } from "../../models/projects";
import { withRouter } from "react-router-dom";
import slugify from "../../utils/slugify";

const mapState = ({ project: { projects } }: State, { match }: OwnProps) => {
  const { slug } = match.params;
  const project = projects.find(({ title }) => slugify(title) === slug);
  return { project };
};

export default withRouter(connect(mapState)(ProjectDetail));
