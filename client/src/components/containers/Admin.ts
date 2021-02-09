import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import Admin from "../Admin/Admin";
import { withRouter } from "react-router-dom";
import { OwnProps } from "../../models/connect";

const mapState = ({
  loaders: { adminDeletionLoader: loader },
  modal: { adminConfirmationModal: modal },
}: State) => ({
  loader,
  modal,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => ({
  deleteProject: (id: string) => dispatch({ type: "DELETE_PROJECT", id, history }),
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_ADMIN_CONFIRMATION_MODAL_STATUS", modalStatus }),
  banUser: (id: string, duration: number | string) =>
    dispatch({ type: "BAN_USER", id, duration, history }),
});

export default withRouter(connect(mapState, mapDispatch)(Admin));
