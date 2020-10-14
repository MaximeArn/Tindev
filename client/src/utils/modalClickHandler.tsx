import { ModalSelector } from "../models/modal";
export default ({ event, modal, history, closeModal }: ModalSelector) => {
  event.target === modal.current && history.push("/");
  closeModal();
};
