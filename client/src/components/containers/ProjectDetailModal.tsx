import { connect } from "react-redux";
import Modal from "../ProjectDetail/Modal/Modal";
import { State } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = ({
  project: { projectDetail },
  error: { projectApplyErrorMessage },
}: State) => {
  const { description } = projectDetail.application;
  return { inputValue: description, error: projectApplyErrorMessage };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>, { project }: any) => ({
  sendApply: () => dispatch({ type: "SEND_USER_APPLY", project }),
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_APPLY_MODAL_STATUS", modalStatus }),
});

export default connect(mapState, mapDispatch)(Modal);
