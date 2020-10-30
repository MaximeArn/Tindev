/** @format */

import { Category } from "./categories";

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
  categories: Category[];
  size: number;
  contributors: Contributor[];
  applicants: Applicant[];
  __v: string;
}

export interface ProjectDetailSubComponent {
  _id: string;
  author: string;
  title: string;
  description: string;
  image: string;
  categories: Category[];
  size: number;
  contributors: Contributor[];
  applicants: Applicant[] | [];
  setModalStatus: Function;
  owner: boolean;
}
export interface ProjectCreation {
  title: string;
  description: string;
  image: any;
  categories: Category[] | [];
  size: number | null;
}

export interface Contributor {
  _id: string;
  username: string;
}

export interface Applicant {
  _id: string;
  username: string;
  message: string;
}

export interface ProjectState {
  projects: Project[];
  createProject: ProjectCreation;
  projectDetail: ProjectDetail;
}

export interface ProjectDetail {
  owner: boolean;
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
  loading: boolean;
  categoriesLoader: boolean;
  sendProject: Function;
  history: any;
  setProjectImage: Function;
  getCategories: Function;
  onUrlChange: Function;
}

export interface ProjectDetailProps {
  history: any;
  location: any;
  match: any;
  project: Project;
  isModalOpen: boolean;
  setModalStatus: Function;
  verifyOwner: Function;
  owner: boolean;
  error: string;
}

export interface ProjectProp {
  project: Project;
}

export interface ApplicantRow {
  _id: string;
  username: string;
  message: string;
}

export interface ApplicantProps {
  projectId: string;
  _id: string;
  username: string;
  message: string;
  acceptApplicant: Function;
  setModalStatus: Function;
  declineApplicantModal: {
    isModalOpen: boolean;
    applicant: string;
  };
  isLoading: {
    loader: boolean;
    applicantId: string;
  };
}

export interface DeclineApplicantModalProps {
  projectId: string;
  userId: string;
  declineApplicant: Function;
  setModalStatus: Function;
  username: string;
}
