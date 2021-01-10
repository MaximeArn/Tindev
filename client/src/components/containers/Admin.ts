import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import Admin from "../Admin/Admin";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  deleteProject: (id: string) => dispatch({ type: "DELETE_PROJECT", id }),
});

export default connect(null, mapDispatch)(Admin);
