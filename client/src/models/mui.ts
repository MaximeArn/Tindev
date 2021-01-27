import { Contributor } from "./projects";

export interface SingleSelectProps {
  label: string;
  values: Contributor[];
}

export interface GetSelectedValues {
  userTechnos: Function;
  projectCreationCategories: Function;
  projectUpdateCategories: Function;
}
