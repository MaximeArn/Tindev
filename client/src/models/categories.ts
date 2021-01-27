import { GetSelectedValues } from "./mui";

export interface Category {
  name: string;
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
