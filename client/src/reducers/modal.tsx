import { ModalAction } from "../models/actions";
import { ModalState } from "../models/states";
import resetInputs from "../utils/resetInputs";

const initialState: ModalState = {
  showNavbar: true,
  applyModal: false,
  deleteProjectModal: false,
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
  { type, modal, modal2, modalStatus, applicant }: ModalAction
) => {
  switch (type) {
    case "SET_AUTH_MODAL_STATUS":
      return {
        ...state,
        authModal: { ...state.authModal, [modal]: modalStatus },
        showNavbar: !modalStatus,
      };
    case "SWAP_AUTH_MODAL":
      return {
        ...state,
        authModal: { [modal]: modalStatus, [modal2]: !modalStatus },
      };
    case "SET_PROJECT_DELETE_MODAL":
      return { ...state, deleteProjectModal: modalStatus };
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
