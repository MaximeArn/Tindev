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
    success: { projectEditionSuccess: success, projectDeletionSuccess },
    modal: { deleteProjectModal: isModalOpen },
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
    isModalOpen,
    projectDeletionSuccess,
  };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  resetSuccessMessage: () =>
    dispatch({ type: "PROJECT_EDITION_SUCCESS_MESSAGE" }),
  deleteProject: (id: string) => dispatch({ type: "SEND_DELETE_PROJECT", id }),
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_PROJECT_DELETE_MODAL", modalStatus }),
});

export default withRouter(connect(mapState, mapDispatch)(EditProject));
