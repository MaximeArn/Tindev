import { connect } from "react-redux";
import Home from "../Home/Home";
import { State } from "../../models/states";

const mapState = ({ loaders: { projectListLoader } }: State) => ({
  loader: projectListLoader,
});

const mapDispatch = (dispatch: any) => ({
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
});

export default connect(mapState, mapDispatch)(Home);
