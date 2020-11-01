import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { withRouter } from "react-router-dom";
import Field from "../Projects/EditProject/Field";
import { ProjectEditFieldOwnProps } from "../../models/connect";
import { MutableRefObject } from "react";

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  { projectId }: ProjectEditFieldOwnProps
) => ({
  getProjectEditInputValues: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_PROJECT_CREATION_VALUE", inputName, inputValue }),
  setNewProjectImage: (image: MutableRefObject<any>) =>
    dispatch({ type: "SET_PROJECT_IMAGE", image }),
  updateProject: (inputName: string) =>
    dispatch({ type: "UPDATE_PROJECT", inputName, projectId }),
});

export default connect(null, mapDispatch)(Field);
