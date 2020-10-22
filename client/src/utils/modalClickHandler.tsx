import { ModalSelector } from "../models/modal";

export default ({ event, modal, closeModal }: ModalSelector) =>
  event.target === modal.current && closeModal(false);
