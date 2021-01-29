import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import EditProject from "../Projects/EditProject/EditProject";
import { AnyAction, Dispatch } from "redux";

const mapState = ({
  project: { createProject, project },
  error: { projectEditionErrorMessage: error },
  success: { projectEditionSuccess: success, projectDeletionSuccess },
  modal: { deleteProjectModal: isModalOpen },
}: State) => ({
  project: project,
  projectCreationValues: createProject,
  error,
  success,
  isModalOpen,
  projectDeletionSuccess,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  resetSuccessMessage: () =>
    dispatch({ type: "PROJECT_EDITION_SUCCESS_MESSAGE" }),
  resetErrorMessage: () => dispatch({ type: "PROJECT_EDITION_ERROR_HANDLER" }),
  deleteProject: (id: string) => dispatch({ type: "SEND_DELETE_PROJECT", id }),
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_PROJECT_DELETE_MODAL", modalStatus }),
});

export default withRouter(connect(mapState, mapDispatch)(EditProject));
