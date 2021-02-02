import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import ProjectList from "../Projects/ProjectsList/ProjectsList";

const mapState = ({
  project: { projects },
  loaders: { projectListLoader: loader },
}: State) => ({ projects, loader });

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
});

export default connect(mapState, mapDispatch)(ProjectList);
