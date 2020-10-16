import { ModalAction } from "../models/actions";
import { ModalState } from "../models/states";

const initialState: ModalState = {
  authModal: false,
  applyModal: false,
};
const modal = (state = initialState, { type, modalStatus }: ModalAction) => {
  switch (type) {
    case "SET_AUTH_MODAL_STATE":
      return { ...state, authModal: modalStatus };
    default:
      return state;
  }
};

export default modal;
