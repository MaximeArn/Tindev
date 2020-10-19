import { connect } from "react-redux";
import Modal from "../Projects/ProjectDetail/Modal/Modal";
import { State } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = ({
  project: { projectDetail },
  error: { projectApplyErrorMessage },
  success: { applySuccess },
}: State) => {
  const { description } = projectDetail.application;
  return {
    inputValue: description,
    error: projectApplyErrorMessage,
    success: applySuccess,
  };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>, { projectId }: any) => ({
  sendApply: () => dispatch({ type: "SEND_USER_APPLY", projectId }),
  resetApplySuccessState: () => dispatch({ type: "RESET_SUCCESS_MESSAGE" }),
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_APPLY_MODAL_STATUS", modalStatus }),
});

export default connect(mapState, mapDispatch)(Modal);
