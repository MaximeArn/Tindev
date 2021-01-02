/** @format */

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import slugify from "../../utils/slugify";
import ManageProject from "../Projects/ManageProject/ManageProject";
import { ProjectDetailProps as OwnProps } from "../../models/projects";
import { AnyAction, Dispatch } from "redux";

const mapState = ({ project: { project } }: State) => ({
  project,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  { match: { params } }: OwnProps
) => {
  const { slug } = params;
  return { getProject: () => dispatch({ type: "GET_PROJECT", slug }) };
};

export default withRouter(connect(mapState, mapDispatch)(ManageProject));
