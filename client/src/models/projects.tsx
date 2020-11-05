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
  contributing: undefined | Contributor;
  contributorLoader: boolean;
  leaveProject: Function;
}
export interface ProjectCreation {
  title: string;
  description: string;
  image: any;
  categories: Category[] | [];
  size: string | number;
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
  project: Project | null;
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
  name: string;
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
  getProjectDetails: Function;
  loader: boolean;
  contributorLoader: boolean;
  leaveProject: Function;
  contributing: undefined | Contributor;
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
  openChatWindow: Function;
}

export interface DeclineApplicantModalProps {
  projectId: string;
  userId: string;
  declineApplicant: Function;
  setModalStatus: Function;
  username: string;
}

export interface EditProjectProps {
  project: Project;
  error: string;
  success: string;
  isModalOpen: boolean;
  categories: Category[];
  projectCreationValues: ProjectCreation;
  getCategories: Function;
  resetSuccessMessage: Function;
  deleteProject: Function;
  setModalStatus: Function;
}

export interface EditFieldProps {
  name: string;
  projectId: string;
  isLoading: {
    fieldName: string;
    loader: boolean;
  };
  value: string | string[];
  inputValue: string | number | undefined;
  getProjectEditInputValues: Function;
  setNewProjectImage: Function;
  updateProject: Function;
}

export interface EditProjectStatusClosed {
  name: string;
  value: string | string[];
  isExpanded: boolean;
  fieldName: string;
  loader: boolean;
  setExpanded: Function;
}

export interface EditProjectStatusOpen {
  name: string;
  value: string | string[];
  inputValue: string | number | undefined;
  isExpanded: boolean;
  setExpanded: Function;
  getProjectEditInputValues: Function;
  setNewProjectImage: Function;
  updateProject: Function;
}
