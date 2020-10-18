/** @format */
import { ApplicantAction } from "../../models/actions";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import Applicant from "../ManageProject/Applicant";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  acceptApplicant: (data: ApplicantAction) =>
    dispatch({ type: "ACCEPT_APPLICANT", data }),
  declineApplicant: (data: ApplicantAction) =>
    dispatch({ type: "DECLINE_APPLICANT", data }),
});

export default connect(null, mapDispatch)(Applicant);
