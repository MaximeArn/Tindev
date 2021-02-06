import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import EditProject from "../Projects/EditProject/EditProject";
import { AnyAction, Dispatch } from "redux";
import { OwnProps } from "../../models/connect";

const mapState = ({
  project: { project, updateProject },
  error: { projectEditionErrorMessage: error, projectDetailsErrorMessage },
  success: { projectDeletionSuccess },
  modal: { deleteProjectModal: isModalOpen },
}: State) => ({
  project: project,
  updateProjectValues: updateProject,
  error,
  projectDetailsErrorMessage,
  isModalOpen,
  projectDeletionSuccess,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  {
    match: {
      params: { slug },
    },
  }: OwnProps
) => ({
  getProject: () => dispatch({ type: "GET_PROJECT", slug }),
  deleteProject: (id: string) => dispatch({ type: "DELETE_PROJECT", id }),
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_PROJECT_DELETE_MODAL", modalStatus }),
});

export default withRouter(connect(mapState, mapDispatch)(EditProject));
