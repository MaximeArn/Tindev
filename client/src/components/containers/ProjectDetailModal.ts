import { connect } from "react-redux";
import Modal from "../Projects/ProjectDetail/Modal/ApplyModal";
import { State } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = ({
  project: {
    projectDetail: {
      application: { description },
    },
  },
  success: { applySuccess },
}: State) => ({
  inputValue: description,
  success: applySuccess,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>, { projectId }: any) => ({
  sendApply: () => dispatch({ type: "SEND_USER_APPLY", projectId }),
  reset: () => {
    dispatch({ type: "APPLY_SUCCESS_MESSAGE" });
    dispatch({ type: "PROJECT_APPLY_ERROR_HANDLER" });
    dispatch({ type: "RESET_PROJECT_APPLY_FORM_VALUES" });
  },
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_APPLY_MODAL_STATUS", modalStatus }),
});

export default connect(mapState, mapDispatch)(Modal);
