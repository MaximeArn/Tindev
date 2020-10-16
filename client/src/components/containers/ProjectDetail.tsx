/** @format */

import { connect } from "react-redux";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import { State } from "../../models/states";
import { ProjectDetailProps as OwnProps } from "../../models/projects";
import { withRouter } from "react-router-dom";
import slugify from "../../utils/slugify";
import { AnyAction, Dispatch } from "redux";

const mapState = (
  { project: { projects, projectDetail } }: State,
  { match }: OwnProps
) => {
  const { slug } = match.params;
  const { isModalOpen } = projectDetail;
  const project = projects.find(({ title }) => slugify(title) === slug);
  return { project, isModalOpen };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_APPLY_MODAL_STATUS", modalStatus }),
});

export default withRouter(connect(mapState, mapDispatch)(ProjectDetail));
