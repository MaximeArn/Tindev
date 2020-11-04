import { User } from "../models/users";
import { Project } from "../models/projects";

export interface SearchProps {
  results: (User | Project)[];
}

export interface SearchTrayProps {
  search: string;
  results: (User | Project)[];
  sendSearchPreview: Function;
  getUser: Function;
}
