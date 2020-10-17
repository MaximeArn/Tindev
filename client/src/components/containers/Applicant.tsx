/** @format */

import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import Applicant from "../ManagePage/Applicant";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  acceptApplicant: (project: string, applicant: string) =>
    dispatch({ type: "ACCEPT_APPLICANT", data: { project, applicant } }),
  denyApplicant: () => dispatch({ type: "DENY_APPLICANT" }),
});

export default connect(null, mapDispatch)(Applicant);
