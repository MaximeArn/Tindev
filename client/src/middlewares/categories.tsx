import { Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import { url } from "../environments/api";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const getCategories = ({ getState, dispatch }: AxiosSubmit) => {
  axios
    .get("/categories")
    .then(({ data: categories }) => {
      dispatch({ type: "SET_CATEGORIES", categories });
    })
    .catch((error) => console.error(error));
};
const categories: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      getCategories({ getState, dispatch });
      break;
    default:
      next(action);
      break;
  }
};

export default categories;
