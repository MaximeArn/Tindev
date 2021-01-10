import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { State } from "../../models/states";
import Admin from "../Admin/Admin";

const mapState = ({
  loaders: { adminDeletionLoader: loader },
  error: { adminErrorMessage: error },
  success: { adminProjectDeletionSuccess: success },
}: State) => ({
  loader,
  error,
  success,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  deleteProject: (id: string) => dispatch({ type: "DELETE_PROJECT", id }),
});

export default connect(mapState, mapDispatch)(Admin);
