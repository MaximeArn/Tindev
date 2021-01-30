import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { withRouter } from "react-router-dom";
import Field from "../Projects/EditProject/Field";
import { ProjectEditFieldOwnProps } from "../../models/connect";
import { State } from "../../models/states";
import { MutableRefObject } from "react";

const mapState = (
  {
    loaders: {
      projectEditionLoader: { fieldName, loader },
    },
    modal: { projectOwnershipModal },
    project: {
      updateProject: { author },
    },
  }: State,
  { name }: ProjectEditFieldOwnProps
) => ({
  isLoading: fieldName === name && loader,
  projectOwnershipModal: name === "author" && projectOwnershipModal,
  author,
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
    setProjectOwnershipModal: (modalStatus: boolean, inputName?: string) => {
      dispatch({ type: "SET_PROJECT_OWNERSHIP_MODAL_STATUS", modalStatus });
      !modalStatus && dispatch({ type: "GET_PROJECT_UPDATE_VALUE", inputName });
    },
    updateProject: (inputName: string) => {
      dispatch({ type: "UPDATE_PROJECT", inputName, projectId, slug, history });
      dispatch({ type: "SET_PROJECT_OWNERSHIP_MODAL_STATUS", modalStatus: false });
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Field));
