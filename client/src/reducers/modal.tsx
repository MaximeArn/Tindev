import { ModalAction } from "../models/actions";
import { ModalState } from "../models/states";
import resetInputs from "../utils/resetInputs";

const initialState: ModalState = {
  showNavbar: true,
  applyModal: false,
  authModal: {
    login: false,
    register: false,
  },
  declineApplicantModal: {
    isModalOpen: false,
    applicant: null,
  },
};
const modal = (
  state = initialState,
  { type, modal, modalStatus, applicant }: ModalAction
) => {
  switch (type) {
    case "SET_AUTH_MODAL_STATUS":
      return {
        ...state,
        authModal: { ...state.authModal, [modal]: modalStatus },
        showNavbar: !modalStatus,
      };
    case "SET_APPLY_MODAL_STATUS":
      return { ...state, applyModal: modalStatus, showNavbar: !modalStatus };
    case "SET_DECLINE_APPLICANT_MODAL_STATUS":
      return {
        ...state,
        declineApplicantModal: { isModalOpen: modalStatus, applicant },
        showNavbar: !modalStatus,
      };
    default:
      return state;
  }
};

export default modal;
