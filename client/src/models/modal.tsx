import { MouseEvent, RefObject } from "react";

export interface ModalSelector {
  event: MouseEvent;
  modal: RefObject<HTMLDivElement>;
  closeModal: Function;
}

export interface AuthModalOpening {
  modalStatus: boolean;
  modal: string;
}

export interface AuthModalSwapping {
  modal: string;
  modal2: string;
}

export interface ProjectDetailModal {
  inputValue: string;
  sendApply: Function;
  setModalStatus: Function;
  reset: Function;
  error: string;
  success: boolean | string;
}

export interface ProfileDeletionModal {
  accountId: string;
  setDeleteModalStatus: Function;
  loader: boolean;
  deleteAccount: Function;
}

export interface ProfileDeletionSuccessModal {
  success: string | boolean;
  onAccountClosing: Function;
}

export interface ForgotPasswordProps {
  inputValue: string;
  setModalStatus: Function;
  resetPassword: Function;
  error: string;
  success: boolean | string;
  loader: boolean;
}

export interface AdminConfirmationProps {
  deleteProject: Function;
  collection: string;
  closeModal: Function;
}
