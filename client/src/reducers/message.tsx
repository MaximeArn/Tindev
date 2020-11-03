import { MessageAction } from "../models/actions";

const initialState = {
  messages: [],
};

const message = (state = initialState, { type }: MessageAction) => {
  switch (type) {
    default:
      return state;
  }
};

export default message;
