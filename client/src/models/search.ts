import { User } from "./users";
import { Project } from "./projects";

export interface SearchProps {
  results: (User | Project)[];
}

export interface SearchTrayProps {
  results: (User | Project)[];
  setSelectedContent: Function;
}

export interface SelectedContent {
  user?: string;
  project?: string;
}
