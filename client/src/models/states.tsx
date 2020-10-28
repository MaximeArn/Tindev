/** @format */

import { Category } from "./categories";
import { ProjectState } from "./projects";
import { UserState } from "./users";
import { User } from "../models/users";
import { Project } from "../models/projects";

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
  users: UserState;
  search: SearchState;
  navbar: NavBarState;
}

export interface Modals {
  showNavbar: boolean;
  applyModal: boolean;
  authModal: {
    login: boolean;
    register: boolean;
  };
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
  swapModal: Function;
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
  success: boolean | string;
  swapModal: Function;
}

export interface ErrorState {
  auth: {
    registerErrorMessage: string;
    loginErrorMessage: string;
  };
  projectCreationErrorMessage: string;
  projectListErrorMessage: string;
  projectApplyErrorMessage: string;
  userProfileErrorMessage: string;
}

export interface AppProps {
  verifyToken: Function;
  showNavbar: boolean;
  getProjects: Function;
  getUsers: Function;
  login: boolean;
  register: boolean;
}

export interface NavState {
  user: { email: string; username: string } | null;
  search: string;
  focused: boolean;
  logout: Function;
  account: any;
  mobile: any;
  main: any;
  getSearchValue: Function;
  openModal: Function;
  setSearchBarStatus: Function;
  history: any;
  setAccountMenu: Function;
  setMobileAnchor: Function;
  setMainMenu: Function;
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
  applyModal: boolean;
  authModal: {
    login: boolean;
    register: boolean;
  };
  declineApplicantModal: {
    isModalOpen: false;
    applicant: null | string;
  };
}

export interface SuccessState {
  applySuccess: boolean | string;
  registerSuccess: boolean | string;
}

export interface SearchState {
  search: string;
  focused: boolean;
  results: User[] | Project[];
}

export interface NavBarState {
  main: any;
  mobile: any;
  account: any;
}
