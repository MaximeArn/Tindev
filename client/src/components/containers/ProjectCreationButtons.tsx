import { connect } from "react-redux";
import Buttons from "../Projects/ProjectCreation/Buttons";

const mapDispatch = (dispatch: any) => ({
  getProjectTeamSize: (inputName: string, inputValue: number) => {
    dispatch({ type: "GET_PROJECT_CREATION_VALUE", inputName, inputValue });
  },
});

export default connect(null, mapDispatch)(Buttons);
