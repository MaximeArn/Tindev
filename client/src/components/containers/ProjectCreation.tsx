import { connect } from "react-redux";
import ProjectCreation from "../ProjectCreation/ProjectCreation";
import { State } from "../../models/states";

const mapState = ({ project: { createProject, categories } }: State) => ({
  projectInputs: createProject,
  categories,
});

// const mapDispatch = (dispatch: any) => ({
//   getProjectInputValue: (inputName: string, inputValue: string) =>
//     dispatch({ type: "GET_PROJECT_CREATION_VALUE", inputName, inputValue }),
// });

export default connect(mapState)(ProjectCreation);
