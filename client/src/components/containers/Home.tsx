import { connect } from "react-redux";
import Home from "../Home/Home";

const mapDispatch = (dispatch: any) => ({
  getProjects: () => dispatch({ type: "GET_PROJECTS" }),
});

export default connect(null, mapDispatch)(Home);
