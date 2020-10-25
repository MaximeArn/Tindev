import { SearchState } from "../models/states";
import { SearchAction } from "../models/actions";

const initialState: SearchState = {
  research: "",
};

const search = (state = initialState, { type, value }: SearchAction) => {
  switch (type) {
    default:
      return state;
  }
};

export default search;
