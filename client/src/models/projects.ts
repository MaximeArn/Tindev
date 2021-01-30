/** @format */

import { Category } from "./categories";
import { SelectedContent } from "./search";

export interface Projects {
  projects: Project[];
  error: string;
  getProjects: Function;
  loader: boolean;
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
  admin: boolean;
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
  updateProject: UpdateProject;
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
  sendProject: Function;
  history: any;
  setProjectImage: Function;
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
  role: string;
  content: null | SelectedContent;
}

export interface ProjectProp {
  project: Project;
  getProject: Function;
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

export interface DeleteProjectModalProps {
  deleteProject: Function;
  projectId: string;
  setModalStatus: Function;
  success: string;
}

export interface EditProjectProps {
  project: Project;
  error: string;
  projectDetailsErrorMessage: string;
  success: string;
  isModalOpen: boolean;
  categories: Category[];
  updateProjectValues: UpdateProject;
  resetSuccessMessage: Function;
  deleteProject: Function;
  getProject: Function;
  setModalStatus: Function;
  projectDeletionSuccess: string;
}

export interface EditFieldProps {
  name: string;
  projectId: string;
  author: string;
  contributors: Contributor[];
  projectOwnershipModal: boolean;
  isLoading: boolean;
  value: string | string[];
  inputValue: string | number | undefined;
  getProjectEditInputValues: Function;
  setNewProjectImage: Function;
  setProjectOwnershipModal: Function;
  updateProject: Function;
}

export interface EditProjectStatusClosed {
  name: string;
  author: string;
  value: string | string[];
  isExpanded: boolean;
  isLoading: boolean;
  projectOwnershipModal: boolean;
  setProjectOwnershipModal: Function;
  updateProject: Function;
  setExpanded: Function;
}

export interface EditProjectStatusOpen {
  name: string;
  value: string | string[];
  inputValue: string | number | undefined;
  isExpanded: boolean;
  contributors: Contributor[];
  setExpanded: Function;
  setProjectOwnershipModal: Function;
  getProjectEditInputValues: Function;
  setNewProjectImage: Function;
  updateProject: Function;
}

export interface UpdateProject {
  title: string;
  description: string;
  categories: String[];
  size: string;
  image: any;
  author: string;
}

export interface ProjectOwnershipModal {
  name: string;
  updateProject: Function;
  author: string;
  setProjectOwnershipModal: Function;
}
