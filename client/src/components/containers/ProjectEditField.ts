import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { withRouter } from "react-router-dom";
import Field from "../Projects/EditProject/Field";
import { ProjectEditFieldOwnProps } from "../../models/connect";
import { State } from "../../models/states";
import { MutableRefObject } from "react";

const mapState = ({ loaders: { projectEditionLoader } }: State) => ({
  isLoading: projectEditionLoader,
});

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  { projectId, match: { params }, history }: ProjectEditFieldOwnProps
) => {
  const { slug } = params;
  return {
    getProjectEditInputValues: (inputName: string, inputValue?: string) =>
      dispatch({ type: "GET_PROJECT_UPDATE_VALUE", inputName, inputValue }),
    setNewProjectImage: (image: MutableRefObject<any>) =>
      dispatch({ type: "SET_UPDATED_PROJECT_IMAGE", image }),
    updateProject: (inputName: string) =>
      dispatch({ type: "UPDATE_PROJECT", inputName, projectId, slug, history }),
  };
};

export default withRouter(connect(mapState, mapDispatch)(Field));
