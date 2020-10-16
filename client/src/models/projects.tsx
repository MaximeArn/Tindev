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
  contributors: Contributor[];
  applicant: Applicant[] | [];
}

export interface ProjectCreation {
  title: string;
  description: string;
  image: any;
  categories: string;
  size: number | undefined;
}

export interface Contributor {
  _id: string;
  name: string;
}

export interface Applicant {
  _id: string;
  username: string;
}

export interface ProjectState {
  projects: Project[];
  createProject: ProjectCreation;
  projectDetail: ProjectDetail;
}

export interface ProjectDetail {
  application: {
    description: string;
  };
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

export interface ProjectDetailProps {
  history: any;
  location: any;
  match: any;
  project: Project;
}
