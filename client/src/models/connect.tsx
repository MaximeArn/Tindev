import { Category } from "./categories";

export interface OwnProps {
  history: any;
  location: any;
  match: any;
}

export interface ProjectEditFieldOwnProps {
  name: string;
  projectId: string;
  value: string | Category[];
  inputValue: string | number | undefined;
  history: any;
  location: any;
  match: any;
}
