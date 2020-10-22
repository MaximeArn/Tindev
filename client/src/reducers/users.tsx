/** @format */

import { CategoriesAction } from "../models/actions";

const initialState = {
  categories: [],
};

const categories = (
  state = initialState,
  { type, categories }: CategoriesAction
) => {
  switch (type) {
    case "GET_USERS":
      return { ...state, categories };
    default:
      return state;
  }
};

export default categories;
