/** @format */

export interface Category {
  name: string;
}

export interface MultipleCategory {
  name: string;
  categories: Category[];
  categoriesFieldValues: Category[];
  loader: boolean;
  getCategories: Function;
  getUserTechnos: Function;
  fetchCategories: Function;
}
