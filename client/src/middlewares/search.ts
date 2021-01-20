import { AxiosSubmit } from "../models/axios";
import { Middleware } from "redux";
import axios from "../utils/axiosInstance";

const sendSearch = ({ dispatch, getState }: AxiosSubmit) => {
  const { search } = getState().search;

  axios
    .get(`/search/${search}`)
    .then(({ data: results }) => {
      dispatch({ type: "SET_SEARCH_RESULTS", results });
    })
    .catch(({ response }) => console.log(response));
};

const search: Middleware = ({ dispatch, getState }) => (next) => (action) => {
  switch (action.type) {
    case "SEND_RESEARCH":
      sendSearch({ dispatch, getState });
      break;
    default:
      next(action);
      break;
  }
};

export default search;
