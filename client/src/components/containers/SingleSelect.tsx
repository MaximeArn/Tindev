import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import SingleSelect from "../SingleSelect/Select";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getNewOwner: (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_PROJECT_UPDATE_VALUE", inputName, inputValue }),
});

export default connect(null, mapDispatch)(SingleSelect);
