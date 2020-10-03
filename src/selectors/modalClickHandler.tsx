import { ModalSelector } from "../models/modal";
export default ({ event, modal, history }: ModalSelector) =>
  event.target === modal.current && history.push("/");
