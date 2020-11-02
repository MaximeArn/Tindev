/** @format */

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import { OwnProps } from "../../models/connect";
import slugify from "../../utils/slugify";
import EditProject from "../Projects/EditProject/EditProject";
import { AnyAction, Dispatch } from "redux";

const mapState = (
  {
    project: { projects, createProject },
    error: { projectEditionErrorMessage: error },
    success: { projectEditionSuccess: success },
  }: State,
  { match }: OwnProps
) => {
  const { slug } = match.params;
  const project = projects.find(({ title }) => slugify(title) === slug);

  return {
    project: project || {},
    projectCreationValues: createProject,
    error,
    success,
  };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getCategories: () => dispatch({ type: "GET_CATEGORIES" }),
  resetSuccessMessage: () =>
    dispatch({ type: "PROJECT_EDITION_SUCCESS_MESSAGE" }),
});

export default withRouter(connect(mapState, mapDispatch)(EditProject));
