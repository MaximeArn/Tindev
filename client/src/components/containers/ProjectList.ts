import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import ProjectList from "../Projects/ProjectsList/ProjectsList";

const mapState = ({
  project: { projects },
  error: { projectListErrorMessage: error },
  loaders: { projectListLoader: loader },
}: State) => ({ projects, error, loader });

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
});

export default connect(mapState, mapDispatch)(ProjectList);
