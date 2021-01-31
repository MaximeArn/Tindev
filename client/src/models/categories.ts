import { GetSelectedValues } from "./mui";

export interface Category {
  name: string;
  image?: string;
}

export interface MultipleCategory {
  toUpdate: string;
  inputName: string;
  categories: Category[];
  categoriesFieldValues: Category[];
  getSelectedValues: GetSelectedValues;
  technos: Category[];
  loader: boolean;
  fetchCategories: Function;
}

export interface CategoriesListProps {
  categories: Category[];
  getCategories: Function;
}
