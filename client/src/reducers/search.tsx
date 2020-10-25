import { SearchState } from "../models/states";
import { SearchAction } from "../models/actions";

const initialState: SearchState = {
  research: "",
};

const search = (state = initialState, { type, value }: SearchAction) => {
  switch (type) {
    case "GET_SEARCH_VALUE":
      return { ...state, research: value };
    default:
      return state;
  }
};

export default search;
