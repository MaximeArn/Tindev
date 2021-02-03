import { User } from "./users";
import { Project } from "./projects";
import { Category } from "./categories";

export interface SearchProps {
  results: (User | Project)[];
}

export interface SearchTrayProps {
  results: (User | Project | Category)[];
  setSelectedContent: Function;
  getResultUrlPath: Function;
}

export interface SelectedContent {
  user?: string;
  project?: string;
  category?: string;
}
