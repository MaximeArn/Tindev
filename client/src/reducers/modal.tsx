import { ModalAction } from "../models/actions";
import { ModalState } from "../models/states";

const initialState: ModalState = {
  showNavbar: true,
  authModal: false,
  applyModal: false,
  declineApplicantModal: false,
};
const modal = (state = initialState, { type, modalStatus }: ModalAction) => {
  switch (type) {
    case "SET_AUTH_MODAL_STATE":
      return { ...state, authModal: modalStatus, showNavbar: !modalStatus };
    case "SET_APPLY_MODAL_STATUS":
      return { ...state, applyModal: modalStatus, showNavbar: !modalStatus };
    case "SET_DECLINE_APPLICANT_MODAL_STATUS":
      return {
        ...state,
        declineApplicantModal: modalStatus,
        showNavbar: !modalStatus,
      };
    default:
      return state;
  }
};

export default modal;
