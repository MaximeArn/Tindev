/** @format */

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import { OwnProps } from "../../models/connect";
import slugify from "../../utils/slugify";
import EditProject from "../Projects/EditProject/EditProject";

const mapState = ({ project: { projects } }: State, { match }: OwnProps) => {
  const { slug } = match.params;
  const project = projects.find(({ title }) => slugify(title) === slug);

  return { project: project || {} };
};

export default withRouter(connect(mapState)(EditProject));
