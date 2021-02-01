import { AnyAction, Dispatch, Middleware } from "redux";
import axios from "../utils/axiosInstance";

const getCategories = (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: "SET_PROJECT_CATEGORIES_LOADER", value: true });
  axios
    .get("/categories")
    .then(({ data: categories }) => {
      dispatch({ type: "SET_CATEGORIES", categories });
    })
    .catch((error) => console.error(error))
    .finally(() => dispatch({ type: "SET_PROJECT_CATEGORIES_LOADER", value: false }));
};

const getCategoryResults = (dispatch: Dispatch<AnyAction>, category: string) => {
  axios
    .get(`/categories/${category}`)
    .then(({ data: categoryResults }) =>
      dispatch({ type: "SET_CATEGORY_RESULTS", categoryResults })
    )
    .catch(({ response: { data: { msg: error } } }) => console.log(error));
};

const categories: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, cat } = action;

  switch (type) {
    case "GET_CATEGORIES":
      getCategories(dispatch);
      break;
    case "GET_CATEGORY_RESULTS":
      getCategoryResults(dispatch, cat);
      break;
    default:
      next(action);
      break;
  }
};

export default categories;
