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
  resetApplySuccessState: Function;
  error: string;
  success: boolean | string;
}

export interface ProfileDeletionModal {
  accountId: string;
  success: boolean | string;
  setDeleteModalStatus: Function;
  deleteAccount: Function;
  onModalClosing: Function;
}

export interface ProfileDeletionSuccessModal {
  success: string | boolean;
  onModalClosing: Function;
}
