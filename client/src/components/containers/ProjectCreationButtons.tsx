import { connect } from "react-redux";
import Buttons from "../Projects/ProjectCreation/Buttons";

const mapDispatch = (dispatch: any) => ({
  getProjectTeamSize: (value: number) => {
    dispatch({ type: "GET_PROJECT_TEAM_SIZE", teamSize: value });
  },
});

export default connect(null, mapDispatch)(Buttons);
