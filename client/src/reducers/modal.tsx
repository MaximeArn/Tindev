import { ModalAction } from "../models/actions";
import { ModalState } from "../models/states";

const initialState: ModalState = {
  showNavbar: true,
  authModal: false,
  applyModal: false,
  declineApplicantModal: {
    isModalOpen: false,
    applicantId: null,
  },
};
const modal = (
  state = initialState,
  { type, modalStatus, applicantId }: ModalAction
) => {
  switch (type) {
    case "SET_AUTH_MODAL_STATE":
      return { ...state, authModal: modalStatus, showNavbar: !modalStatus };
    case "SET_APPLY_MODAL_STATUS":
      return { ...state, applyModal: modalStatus, showNavbar: !modalStatus };
    case "SET_DECLINE_APPLICANT_MODAL_STATUS":
      return {
        ...state,
        declineApplicantModal: { isModalOpen: modalStatus, applicantId },
        showNavbar: !modalStatus,
      };
    default:
      return state;
  }
};

export default modal;
