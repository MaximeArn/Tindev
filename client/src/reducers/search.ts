import { SearchState } from "../models/states";
import { SearchAction } from "../models/actions";

const initialState: SearchState = {
  search: "",
  focused: false,
  results: [],
};

const search = (state = initialState, { type, value, result, focused }: SearchAction) => {
  switch (type) {
    case "GET_SEARCH_VALUE":
      return { ...state, search: value };
    case "SET_SEARCH_RESULTS":
      const results = result || [];
      return { ...state, results };
    case "SET_SEARCH_BAR_FOCUS_STATUS":
      return { ...state, focused };
    default:
      return state;
  }
};

export default search;
