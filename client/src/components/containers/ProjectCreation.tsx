import { connect } from "react-redux";
import ProjectCreation from "../Projects/ProjectCreation/ProjectCreation";
import { State } from "../../models/states";
import { MutableRefObject } from "react";

const mapState = (state: State) => {
  const { createProject } = state.project;
  const { projectCreationErrorMessage: error } = state.error;
  const {
    projectCreationLoader: loading,
    projectCategoriesLoader: categoriesLoader,
  } = state.loaders;

  return { projectInputs: createProject, error, loading, categoriesLoader };
};

const mapDispatch = (dispatch: any) => ({
  setProjectImage: (image: MutableRefObject<any>) =>
    dispatch({ type: "SET_PROJECT_IMAGE", image }),
  sendProject: () => dispatch({ type: "SEND_PROJECT" }),
  getCategories: () => dispatch({ type: "GET_CATEGORIES" }),
});

export default connect(mapState, mapDispatch)(ProjectCreation);
