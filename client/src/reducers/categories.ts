import { CategoriesAction } from "../models/actions";

const initialState = {
  categories: [],
};

const categories = (
  state = initialState,
  { type, categories }: CategoriesAction
) => {
  switch (type) {
    case "SET_CATEGORIES":
      return { ...state, categories };
    default:
      return state;
  }
};

export default categories;
