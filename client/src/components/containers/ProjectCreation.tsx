import { connect } from "react-redux";
import ProjectCreation from "../ProjectCreation/ProjectCreation";

const mapDispatch = (dispatch: any) => ({
  getProjectInputValue: () => dispatch(),
});

export default connect(null)(ProjectCreation);
