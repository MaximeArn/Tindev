import { Contributor } from "./projects";

export interface SingleSelectProps {
  label: string;
  values: Contributor[];
  inputValue: any;
  getNewOwner: Function;
}

export interface GetSelectedValues {
  userTechnos: Function;
  projectCreationCategories: Function;
  projectUpdateCategories: Function;
}
