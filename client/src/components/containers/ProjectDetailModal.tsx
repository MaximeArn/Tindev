import { connect } from "react-redux";
import Modal from "../ProjectDetail/Modal/Modal";
import { State } from "../../models/states";

const mapState = ({ project: { projectDetail } }: State) => {
  const { description } = projectDetail.application;
  return { inputValue: description };
};
export default connect(mapState)(Modal);
