import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import Field from "../Projects/EditProject/Field";
import { State } from "../../models/states";
import { MutableRefObject } from "react";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getProjectEditInputValues: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_PROJECT_CREATION_VALUE", inputName, inputValue }),
  setNewProjectImage: (image: MutableRefObject<any>) => {
    console.log("NEW IMAGE SET");
    dispatch({ type: "SET_PROJECT_IMAGE", image });
  },
  updateProject: (inputName: string, projectId: string) =>
    dispatch({ type: "UPDATE_PROJECT", inputName, projectId }),
});

export default connect(null, mapDispatch)(Field);
