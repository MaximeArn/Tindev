/** @format */

export interface Category {
  name: string;
}

export interface MultipleCategory {
  categories: Category[];
  categoriesFieldValues: Category[];
  getCategories: Function;
}
