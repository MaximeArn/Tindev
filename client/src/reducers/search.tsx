import { SearchState } from "../models/states";
import { SearchAction } from "../models/actions";

const initialState: SearchState = {
  search: "",
  results: [],
};

const search = (
  state = initialState,
  { type, value, results }: SearchAction
) => {
  switch (type) {
    case "GET_SEARCH_VALUE":
      return { ...state, search: value };
    case "SET_SEARCH_RESULTS":
      return { ...state, results };
    default:
      return state;
  }
};

export default search;
