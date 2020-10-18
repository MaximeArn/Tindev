/** @format */

import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import Applicant from "../ManageProject/Applicant";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  acceptApplicant: (project: string, user: string) =>
    dispatch({ type: "ACCEPT_APPLICANT", data: { project, user } }),
  declineApplicant: (project: string, user: string) =>
    dispatch({ type: "DECLINE_APPLICANT", data: { project, user } }),
});

export default connect(null, mapDispatch)(Applicant);
