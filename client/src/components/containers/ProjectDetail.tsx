/** @format */

import { connect } from "react-redux";
import ProjectDetail from "../Projects/ProjectDetail/ProjectDetail";
import { State } from "../../models/states";
import { ProjectDetailProps as OwnProps } from "../../models/projects";
import { withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";

const mapState = ({
  project: {
    project,
    projectDetail: { owner },
  },
  modal: { applyModal },
  error: { projectDetailsErrorMessage },
  loaders: { projectDetailsLoader: loader },
  auth: { user },
}: State) => {
  const { username: connectedUser } = user && user;
  const contributing = project?.contributors.find(
    ({ username }) => connectedUser && username === connectedUser
  );
  return {
    project,
    isModalOpen: applyModal,
    owner,
    error: projectDetailsErrorMessage,
    loader,
    contributing,
  };
};

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  { match: { params } }: OwnProps
) => {
  const { slug } = params;
  return {
    setModalStatus: (modalStatus: boolean) =>
      dispatch({ type: "SET_APPLY_MODAL_STATUS", modalStatus }),
    verifyOwner: (projectAuthor: string) =>
      dispatch({ type: "VERIFY_OWNER", projectAuthor }),
    getProjectDetails: () => {
      dispatch({ type: "GET_PROJECT", slug });
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(ProjectDetail));
