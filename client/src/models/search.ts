import { User } from "./users";
import { Project } from "./projects";

export interface SearchProps {
  results: (User | Project)[];
}

export interface SearchTrayProps {
  search: string;
  results: (User | Project)[];
  sendSearchPreview: Function;
  setSelectedContent: Function;
}

export interface SelectedContent {
  user?: string;
  project?: string;
}
