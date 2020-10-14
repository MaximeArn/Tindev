/** @format */

export interface Projects {
  projects: Project[];
}

export interface Project {
  _id: string;
  author: string;
  title: string;
  description: string;
  image: string;
  categories: Category[] | [];
  size: number;
  contributors: Contributor[] | [];
}

export interface ProjectCreation {
  title: string;
  description: string;
  image: any;
  categories: string;
  size: number | undefined;
}

export interface Contributor {
  name: string;
}

export interface Category {
  name: string;
  color?: string;
}

export interface ProjectState {
  projects: Project[];
  categories: Category[];
  createProject: ProjectCreation;
}

export interface ProjectCreationButton {
  getProjectTeamSize: Function;
}

export interface ProjectCreationProps {
  projectInputs: Project;
  error: string;
  sendProject: Function;
  setProjectImage: Function;
}
