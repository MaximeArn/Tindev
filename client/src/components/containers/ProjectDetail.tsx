/** @format */

import { connect } from "react-redux";
import ProjectDetail from "../Projects/ProjectDetail/ProjectDetail";
import { State } from "../../models/states";
import { ProjectDetailProps as OwnProps } from "../../models/projects";
import { withRouter } from "react-router-dom";
import slugify from "../../utils/slugify";
import { AnyAction, Dispatch } from "redux";
import { ErrorState } from "../../models/states";

const mapState = (
  {
    project: {
      projects,
      projectDetail: { owner },
    },
    modal: { applyModal },
    error: { projectDetailErrorMessage },
  }: State,
  { match }: OwnProps
) => {
  const { slug } = match.params;
  const project = projects.find(({ title }) => slugify(title) === slug);
  const error = project ? null : "oops... something went wrong ";
  return {
    project,
    isModalOpen: applyModal,
    owner,
    projectDetailErrorMessage: error,
  };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_APPLY_MODAL_STATUS", modalStatus }),
  verifyOwner: (projectAuthor: string) =>
    dispatch({ type: "VERIFY_OWNER", projectAuthor }),
});

export default withRouter(connect(mapState, mapDispatch)(ProjectDetail));
