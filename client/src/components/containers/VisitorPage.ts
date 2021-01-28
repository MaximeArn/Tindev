import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import VisitorPage from "../VisitorPage/VisitorPage";

const mapState = ({
  modal: { redirectionModal },
  success: { redirectionSuccess: message },
}: State) => ({
  redirectionModal,
  message,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  openModal: (modal: string, modalStatus: boolean) =>
    dispatch({
      type: "SET_AUTH_MODAL_STATUS",
      modal,
      modalStatus,
    }),
  setRedirectionModalStatus: (modalStatus: boolean) => {
    dispatch({ type: "SET_REDIRECTION_MODAL_STATUS", modalStatus });
    dispatch({ type: "REDIRECTION_SUCCESS_MESSAGE" });
  },
});

export default connect(mapState, mapDispatch)(VisitorPage);
