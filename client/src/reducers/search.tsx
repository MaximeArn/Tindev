import { SearchState } from "../models/states";
import { SearchAction } from "../models/actions";

const initialState: SearchState = {
  search: "",
};

const search = (state = initialState, { type, value }: SearchAction) => {
  switch (type) {
    case "GET_SEARCH_VALUE":
      return { ...state, search: value };
    default:
      return state;
  }
};

export default search;
