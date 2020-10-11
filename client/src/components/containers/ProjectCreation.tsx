import { connect } from "react-redux";
import ProjectCreation from "../ProjectCreation/ProjectCreation";

const mapDispatch = (dispatch: any) => ({
  getProjectInputValue: (inputName: string, inputValue: string) =>
    dispatch({ type: "" }),
});

export default connect(null, mapDispatch)(ProjectCreation);
