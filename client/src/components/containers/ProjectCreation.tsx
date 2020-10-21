import { connect } from "react-redux";
import ProjectCreation from "../Projects/ProjectCreation/ProjectCreation";
import { State } from "../../models/states";
import { OwnProps } from "../../models/connect";
import { MutableRefObject } from "react";
import { withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";

const mapState = (state: State) => {
  const { createProject } = state.project;
  const { projectCreationErrorMessage: error } = state.error;
  const {
    projectCreationLoader: loading,
    projectCategoriesLoader: categoriesLoader,
  } = state.loaders;

  return {
    projectInputs: createProject,
    error,
    loading,
    categoriesLoader,
  };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => {
  return {
    setProjectImage: (image: MutableRefObject<any>) =>
      dispatch({ type: "SET_PROJECT_IMAGE", image }),
    sendProject: () => dispatch({ type: "SEND_PROJECT", history }),
    getCategories: () => dispatch({ type: "GET_CATEGORIES" }),
  };
};

export default withRouter(connect(mapState, mapDispatch)(ProjectCreation));
