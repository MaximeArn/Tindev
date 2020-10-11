import { connect } from "react-redux";
import ProjectCreation from "../ProjectCreation/ProjectCreation";
import { State } from "../../models/states";
import { MutableRefObject } from "react";

const mapState = ({ project: { createProject } }: State) => ({
  projectInputs: createProject,
});

const mapDispatch = (dispatch: any) => ({
  setProjectImage: (image: MutableRefObject<any>) =>
    dispatch({ type: "SET_PROJECT_IMAGE", image }),
  sendProject: () => dispatch({ type: "SEND_PROJECT" }),
});

export default connect(mapState, mapDispatch)(ProjectCreation);
