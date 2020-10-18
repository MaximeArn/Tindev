/** @format */

import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import Applicant from "../ManageProject/Applicant";
import { ApplicantAction } from "../../models/actions";

const mapState = ({ modal: { declineApplicantModal } }: State) => ({
  isModalOpen: declineApplicantModal,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  acceptApplicant: (data: ApplicantAction) =>
    dispatch({ type: "ACCEPT_APPLICANT", data }),
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_DECLINE_APPLICANT_MODAL_STATUS", modalStatus }),
});

export default connect(mapState, mapDispatch)(Applicant);
