import { connect } from "react-redux";
import ProjectCreation from "../ProjectCreation/ProjectCreation";
import { State } from "../../models/states";
import { MutableRefObject } from "react";

const mapState = (state: State) => {
  const { createProject } = state.project;
  const { projectCreationErrorMessage: error } = state.error;
  const { projectCreationLoader: loading } = state.loaders;

  return { projectInputs: createProject, error, loading };
};

const mapDispatch = (dispatch: any) => ({
  setProjectImage: (image: MutableRefObject<any>) =>
    dispatch({ type: "SET_PROJECT_IMAGE", image }),
  sendProject: () => dispatch({ type: "SEND_PROJECT" }),
  getCategories: () => dispatch({ type: "GET_CATEGORIES" }),
});

export default connect(mapState, mapDispatch)(ProjectCreation);
