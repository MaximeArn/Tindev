/** @format */

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import slugify from "../../utils/slugify";
import EditProject from "../Projects/EditProject/EditProject";

const mapState = ({ project: { projects } }: State, { match }: any) => {
  const { slug } = match.params;
  const project = projects.find(({ title }) => slugify(title) === slug);
  if (project) {
    const { _id, author, applicants, contributors, __v, ...editable } = project;
    return { project: editable };
  } else {
    return {};
  }
};

export default withRouter(connect(mapState)(EditProject));
