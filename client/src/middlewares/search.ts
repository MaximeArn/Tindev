import { AxiosSubmit } from "../models/axios";
import { Middleware } from "redux";
import axios from "../utils/axiosInstance";

const getSearchResults = ({ dispatch, getState }: AxiosSubmit) => {
  const { search } = getState().search;

  search.trim()
    ? axios
        .get(`/search/${search}`)
        .then(({ data: result }) => {
          dispatch({ type: "SET_SEARCH_RESULTS", result });
        })
        .catch(({ response }) => console.log(response))
    : dispatch({ type: "SET_SEARCH_RESULTS" });
};

const search: Middleware = ({ dispatch, getState }) => (next) => (action) => {
  switch (action.type) {
    case "GET_SEARCH_RESULTS":
      getSearchResults({ dispatch, getState });
      break;
    default:
      next(action);
      break;
  }
};

export default search;
