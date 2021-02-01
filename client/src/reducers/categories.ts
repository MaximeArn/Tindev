import { CategoriesAction } from "../models/actions";

const initialState = {
  categories: [],
  categoryResults: [],
};

const categories = (
  state = initialState,
  { type, categories, categoryResults }: CategoriesAction
) => {
  switch (type) {
    case "SET_CATEGORIES":
      return { ...state, categories };
    case "SET_CATEGORY_RESULTS":
      return { ...state, categoryResults };
    default:
      return state;
  }
};

export default categories;
