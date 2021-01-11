import { ModalAction } from "../models/actions";
import { ModalState } from "../models/states";

const initialState: ModalState = {
  showNavbar: true,
  applyModal: false,
  deleteProjectModal: false,
  closeAccountModal: false,
  forgotPasswordModal: false,
  adminConfirmationModal: false,
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
    case "FORGOT_PASSWORD_MODAL_SWAP":
      return {
        ...state,
        forgotPasswordModal: modalStatus,
        authModal: { ...state.authModal, login: !modalStatus },
      };
    case "SET_FORGOT_PASSWORD_MODAL_STATUS":
      return {
        ...state,
        forgotPasswordModal: modalStatus,
        showNavbar: !modalStatus,
      };
    case "SET_DECLINE_APPLICANT_MODAL_STATUS":
      return {
        ...state,
        declineApplicantModal: { isModalOpen: modalStatus, applicant },
        showNavbar: !modalStatus,
      };
    case "SET_ACCOUNT_DELETION_MODAL_STATUS":
      return { ...state, closeAccountModal: modalStatus };
    case "SET_ADMIN_CONFIRMATION_MODAL_STATUS":
      return { ...state, adminConfirmationModal: modalStatus };
    default:
      return state;
  }
};

export default modal;
