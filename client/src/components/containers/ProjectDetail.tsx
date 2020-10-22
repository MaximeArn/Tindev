/** @format */

import { connect } from "react-redux";
import ProjectDetail from "../Projects/ProjectDetail/ProjectDetail";
import { State } from "../../models/states";
import { ProjectDetailProps as OwnProps } from "../../models/projects";
import { withRouter } from "react-router-dom";
import slugify from "../../utils/slugify";
import { AnyAction, Dispatch } from "redux";

const mapState = (
  {
    project: {
      projects,
      projectDetail: { owner },
    },
    modal: { applyModal },
  }: State,
  { match }: OwnProps
) => {
  const { slug } = match.params;
  const project = projects.find(({ title }) => slugify(title) === slug);
  const error = project ? null : "Oops... something went wrong ";
  return {
    project,
    isModalOpen: applyModal,
    owner,
    error,
  };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_APPLY_MODAL_STATUS", modalStatus }),
  verifyOwner: (projectAuthor: string) =>
    dispatch({ type: "VERIFY_OWNER", projectAuthor }),
});

export default withRouter(connect(mapState, mapDispatch)(ProjectDetail));
