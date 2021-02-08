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
  loaders: { projectDeletionLoader },
}: State) => ({
  project: project,
  updateProjectValues: updateProject,
  error,
  projectDetailsErrorMessage,
  isModalOpen,
  projectDeletionLoader,
  projectDeletionSuccess,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  {
    match: {
      params: { slug },
    },
  }: OwnProps
) => {
  const setModalStatus = (modalStatus: boolean) => {
    dispatch({ type: "SET_PROJECT_DELETE_MODAL", modalStatus });
  };

  return {
    getProject: () => dispatch({ type: "GET_PROJECT", slug }),
    deleteProject: (id: string) => dispatch({ type: "DELETE_PROJECT", id }),
    setModalStatus,
    resetDeletionModal: () => {
      dispatch({ type: "PROJECT_DELETION_SUCCESS_MESSAGE" });
      setModalStatus(false);
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(EditProject));
