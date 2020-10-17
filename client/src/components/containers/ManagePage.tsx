/** @format */

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import slugify from "../../utils/slugify";
import ApplyPage from "../ManagePage/ManagePage";
import { ProjectDetailProps as OwnProps } from "../../models/projects";

const mapState = ({ project: { projects } }: State, { match }: OwnProps) => {
  const { slug } = match.params;
  console.log(slug);
  const project = projects.find(({ title }) => slugify(title) === slug);
  project && console.log(project.applicant);
  return { project };
};

export default withRouter(connect(mapState)(ApplyPage));
