import { User } from "./users";
import { Project } from "./projects";
import { Category } from "./categories";

export interface SearchProps {
  results: (User | Project | Category)[];
  getRenderedComponent: Function;
}

export interface SearchTrayProps {
  results: (User | Project | Category)[];
  getResultUrlPath: Function;
}
