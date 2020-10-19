/** @format */

import { ProjectState } from "./projects";
import { Category } from "./categories";

export interface Authentication {
  register: {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    city?: string;
    age?: number | undefined;
  };

  login: {
    email: string;
    password: string;
  };

  user: { email: string; username: string } | null;
}

export interface State {
  auth: Authentication;
  error: ErrorState;
  success: SuccessState;
  categories: CategoriesState;
  project: ProjectState;
  loaders: Loaders;
  modal: Modals;
}

export interface Modals {
  showNavbar: boolean;
  authModal: boolean;
  applyModal: boolean;
  declineApplicantModal: {
    isModalOpen: boolean;
    applicantId: string | null;
  };
}

export interface Loaders {
  registerLoader: boolean;
  loginLoader: boolean;
  projectListLoader: boolean;
  projectCreationLoader: boolean;
  projectCategoriesLoader: boolean;
  manageApplicantLoader: {
    applicantId: null | string;
    loader: false;
  };
}

export interface RegisterAuth {
  register: {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    city?: string;
    age?: number | undefined;
  };
  submitRegister: Function;
  error: string;
  registerLoader: boolean;
  closeModal: Function;
}

export interface LoginAuth {
  login: {
    email: string;
    password: string;
  };
  loginLoader: boolean;
  submitLogin: Function;
  error: string;
  closeModal: Function;
}

export interface ErrorState {
  registerErrorMessage: string;
  loginErrorMessage: string;
  projectCreationErrorMessage: string;
  projectListErrorMessage: string;
  projectApplyErrorMessage: string;
  projectDetailErrorMessage: string;
}

export interface AppProps {
  verifyToken: Function;
  showNavbar: boolean;
  getProjects: Function;
}

export interface NavState {
  user: { email: string; username: string } | null;
  logout: Function;
  openModal: Function;
}

export interface HomeProps {
  loader: boolean;
  getProjects: Function;
}

export interface CategoriesState {
  categories: Category[];
}

export interface ModalState {
  showNavbar: boolean;
  authModal: boolean;
  applyModal: boolean;
  declineApplicantModal: {
    isModalOpen: false;
    applicantId: null;
  };
}

export interface SuccessState {
  applySuccess: boolean | string;
}
