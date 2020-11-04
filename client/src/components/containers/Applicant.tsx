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
  declineApplicantModal,
  isLoading: manageApplicantLoader,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  acceptApplicant: (data: ApplicantAction) =>
    dispatch({ type: "ACCEPT_APPLICANT", data }),
  setModalStatus: (modalStatus: boolean, applicant: string) =>
    dispatch({
      type: "SET_DECLINE_APPLICANT_MODAL_STATUS",
      modalStatus,
      applicant,
    }),
  openChatWindow: (username: string, id: string) =>
    dispatch({ type: "OPEN_CHAT_WINDOW", username, id }),
});

export default connect(mapState, mapDispatch)(Applicant);
