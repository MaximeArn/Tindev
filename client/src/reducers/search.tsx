import { SearchState } from "../models/states";
import { SearchAction } from "../models/actions";

const initialState: SearchState = {
  search: "",
  focused: false,
  results: [],
  selectedContent: null,
};

const search = (
  state = initialState,
  { type, value, results, focused, selectedContent }: SearchAction
) => {
  switch (type) {
    case "GET_SEARCH_VALUE":
      return { ...state, search: value };
    case "SET_SEARCH_RESULTS":
      return { ...state, results };
    case "SET_SEARCH_BAR_FOCUS_STATUS":
      return { ...state, focused };
    case "SET_SELECTED_CONTENT": {
      return { ...state, selectedContent };
    }
    default:
      return state;
  }
};

export default search;
