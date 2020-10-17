import { ModalSelector } from "../models/modal";

export default ({ event, modal, history, closeModal }: ModalSelector) => {
  if (event.target === modal.current) {
    history.push("/");
    closeModal(false);
  }
};
