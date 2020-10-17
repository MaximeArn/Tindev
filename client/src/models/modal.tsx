import { MouseEvent, RefObject } from "react";

export interface ModalSelector {
  event: MouseEvent;
  modal: RefObject<HTMLDivElement>;
  history: any;
  closeModal: Function;
}

export interface ProjectDetailModal {
  inputValue: string;
  sendApply: Function;
  setModalStatus: Function;
  resetApplySuccessState: Function;
  error: string;
  success: boolean | string;
}
