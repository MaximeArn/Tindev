import { GlobalUrlPath } from "./globals";
import { GetSelectedValues } from "./mui";
import { Project } from "./projects";

export interface Category extends GlobalUrlPath {
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
  loader: boolean;
  getCategories: Function;
}

export interface CategoryResultsProps {
  results: (Category & Project)[];
  loader: boolean;
  fetchResults: Function;
  location: any;
}
