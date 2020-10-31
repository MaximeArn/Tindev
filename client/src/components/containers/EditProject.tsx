/** @format */

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import { OwnProps } from "../../models/connect";
import slugify from "../../utils/slugify";
import EditProject from "../Projects/EditProject/EditProject";
import { AnyAction, Dispatch } from "redux";

const mapState = (
  { project: { projects }, categories: { categories } }: State,
  { match }: OwnProps
) => {
  const { slug } = match.params;
  const project = projects.find(({ title }) => slugify(title) === slug);

  return { project: project || {}, categories };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getCategories: () => dispatch({ type: "GET_CATEGORIES" }),
});

export default withRouter(connect(mapState, mapDispatch)(EditProject));
