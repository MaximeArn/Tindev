import { connect } from "react-redux";
import ProjectCreation from "../ProjectCreation/ProjectCreation";
import { State } from "../../models/states";

const mapState = ({ project: { createProject } }: State) => ({
  projectInputs: createProject,
});

export default connect(mapState)(ProjectCreation);
