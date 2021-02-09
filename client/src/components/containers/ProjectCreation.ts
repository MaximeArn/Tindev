import { connect } from "react-redux";
import ProjectCreation from "../Projects/ProjectCreation/ProjectCreation";
import { State } from "../../models/states";
import { OwnProps } from "../../models/connect";
import { MutableRefObject } from "react";
import { withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";

const mapState = ({
  project: { createProject },
  loaders: { categoriesLoader: loading },
}: State) => {
  return {
    projectInputs: createProject,
    loading,
  };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => {
  return {
    setProjectImage: (image: MutableRefObject<any>) =>
      dispatch({ type: "SET_PROJECT_IMAGE", image }),
    sendProject: () => dispatch({ type: "SEND_PROJECT", history }),
    onUrlChange: () => {
      dispatch({ type: "PROJECT_CREATION_ERROR_HANDLER" });
      dispatch({ type: "RESET_PROJECT_CREATION_VALUES" });
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(ProjectCreation));
