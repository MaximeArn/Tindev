import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { State } from "../../models/states";
import Admin from "../Admin/Admin";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";

const mapState = ({
  loaders: { adminDeletionLoader: loader },
  error: { adminErrorMessage: error },
  success: { adminProjectDeletionSuccess: success },
}: State) => ({
  loader,
  error,
  success,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => ({
  deleteProject: (id: string) =>
    dispatch({ type: "DELETE_PROJECT", id, history }),
});

export default withRouter(connect(mapState, mapDispatch)(Admin));
