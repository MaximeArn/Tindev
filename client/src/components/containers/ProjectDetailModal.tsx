import { connect } from "react-redux";
import Modal from "../ProjectDetail/Modal/Modal";
import { State } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = ({ project: { projectDetail } }: State) => {
  const { description } = projectDetail.application;
  return { inputValue: description };
};

const mapDispatch = (dispatch: Dispatch<AnyAction>, { project }: any) => {
  return { sendApply: () => dispatch({ type: "SEND_USER_APPLY", project }) };
};

export default connect(mapState, mapDispatch)(Modal);
