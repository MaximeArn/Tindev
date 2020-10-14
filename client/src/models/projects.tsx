/** @format */
import { Category } from "../models/categories";
export interface Projects {
  projects: Project[];
  error: string;
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

export interface ProjectState {
  projects: Project[];
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
  getCategories: Function;
}
