import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import Field from "../Projects/EditProject/Field";
import { State } from "../../models/states";

// const mapState = ({project: { createProject }}: State) => {

// }

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getProjectEditInputValues: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_PROJECT_CREATION_VALUE", inputName, inputValue }),
});

export default connect(null, mapDispatch)(Field);
