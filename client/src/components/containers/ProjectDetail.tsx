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
  loaders: {
    projectDetailsLoader: loader,
    removingContributorLoader: contributorLoader,
  },
  auth: { user },
}: State) => {
  const contributing =
    user &&
    project?.contributors.find(({ username }) => username === user.username);
  return {
    role: user.role,
    project,
    isModalOpen: applyModal,
    owner,
    error: projectDetailsErrorMessage,
    loader,
    contributorLoader,
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
    leaveProject: (id: string) => dispatch({ type: "LEAVE_PROJECT", id }),
  };
};

export default withRouter(connect(mapState, mapDispatch)(ProjectDetail));
