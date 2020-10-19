/** @format */

import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import Applicant from "../Projects/ManageProject/Applicant";
import { ApplicantAction } from "../../models/actions";

const mapState = ({
  modal: { declineApplicantModal },
  loaders: { manageApplicantLoader },
}: State) => ({
  isModalOpen: declineApplicantModal,
  isLoading: manageApplicantLoader,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  acceptApplicant: (data: ApplicantAction) =>
    dispatch({ type: "ACCEPT_APPLICANT", data }),
  setModalStatus: (modalStatus: boolean) =>
    dispatch({ type: "SET_DECLINE_APPLICANT_MODAL_STATUS", modalStatus }),
});

export default connect(mapState, mapDispatch)(Applicant);
