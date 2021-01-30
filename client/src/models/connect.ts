import { Category } from "./categories";
import { Contributor } from "./projects";

export interface OwnProps {
  history: any;
  location: any;
  match: any;
}

export interface ProjectEditFieldOwnProps {
  name: string;
  projectId: string;
  value: string | Category[];
  contributors: Contributor[] | [];
  inputValue: string | number | undefined;
  history: any;
  location: any;
  match: any;
}
