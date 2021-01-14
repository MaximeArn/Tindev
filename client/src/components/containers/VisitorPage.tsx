import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import VisitorPage from "../VisitorPage/VisitorPage";

const mapState = ({
  modal: { suspendedAccountModal },
  success: { suspendedAccountSuccess: message },
}: State) => ({
  suspendedAccountModal,
  message,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  openModal: (modal: string, modalStatus: boolean) =>
    dispatch({
      type: "SET_AUTH_MODAL_STATUS",
      modal,
      modalStatus,
    }),
  resetGlobalState: () => dispatch({ type: "RESET_GLOBAL_STATE" }),
});

export default connect(mapState, mapDispatch)(VisitorPage);
