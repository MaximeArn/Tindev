import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { State } from "../../models/states";
import EditProject from "../Projects/EditProject/EditProject";
import { AnyAction, Dispatch } from "redux";

const mapState = ({
  project: { createProject, project },
  modal: { deleteProjectModal: isModalOpen },
}: State) => ({
  project: project,
  projectCreationValues: createProject,
  isModalOpen,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  deleteProject: (id: string) => dispatch({ type: "SEND_DELETE_PROJECT", id }),
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_PROJECT_DELETE_MODAL", modalStatus }),
});

export default withRouter(connect(mapState, mapDispatch)(EditProject));
