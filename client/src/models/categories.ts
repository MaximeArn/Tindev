import { GetSelectedValues } from "./mui";
import { Project } from "./projects";
import { SelectedContent } from "./search";

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

export interface CategoryResultsProps {
  results: (Category & Project)[];
  selectedContent: null | SelectedContent;
  fetchResults: Function;
}
