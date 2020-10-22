import { AnyAction, Dispatch, Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import { url } from "../environments/api";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const getCategories = (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: "SET_PROJECT_CATEGORIES_LOADER", value: true });
  axios
    .get("/categories")
    .then(({ data: categories }) => {
      console.log(categories);
      dispatch({ type: "SET_CATEGORIES", categories });
    })
    .catch((error) => console.error(error))
    .finally(() =>
      dispatch({ type: "SET_PROJECT_CATEGORIES_LOADER", value: false })
    );
};
const categories: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      getCategories(dispatch);
      break;
    default:
      next(action);
      break;
  }
};

export default categories;
