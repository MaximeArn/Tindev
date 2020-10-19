/** @format */

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import slugify from "../../utils/slugify";
import ManageProject from "../Projects/ManageProject/ManageProject";
import { ProjectDetailProps as OwnProps } from "../../models/projects";

const mapState = ({ project: { projects } }: State, { match }: OwnProps) => {
  const { slug } = match.params;
  const project = projects.find(({ title }) => slugify(title) === slug);
  return { project };
};

export default withRouter(connect(mapState)(ManageProject));
