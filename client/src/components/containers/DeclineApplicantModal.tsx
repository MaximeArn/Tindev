import { Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import DeclineModal from "../Projects/ManageProject/DeclineModal";
import { ApplicantAction } from "../../models/actions";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setModalStatus: (modalStatus: boolean) =>
    dispatch({
      type: "SET_DECLINE_APPLICANT_MODAL_STATUS",
      modalStatus,
      applicant: null,
    }),
  declineApplicant: (data: ApplicantAction) =>
    dispatch({ type: "DECLINE_APPLICANT", data }),
});
export default connect(null, mapDispatch)(DeclineModal);
