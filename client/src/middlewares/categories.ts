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
const categories: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type } = action;

  switch (type) {
    case "GET_CATEGORIES":
      getCategories(dispatch);
      break;
    default:
      next(action);
      break;
  }
};

export default categories;
