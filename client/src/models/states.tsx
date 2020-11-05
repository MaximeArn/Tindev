/** @format */

import { Category } from "./categories";
import { ProjectState } from "./projects";
import { UserState, AuthUserState } from "./users";
import { User } from "../models/users";
import { Project } from "../models/projects";
import { ChatWindow, Messages } from "./chat";

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

  user: AuthUserState;
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
  message: MessageState;
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
  projectDetailsLoader: boolean;
  projectCreationLoader: boolean;
  projectCategoriesLoader: boolean;
  projectEditionLoader: {
    fieldName: string | null;
    loader: boolean;
  };
  manageApplicantLoader: {
    applicantId: null | string;
    loader: boolean;
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
  projectDetailsErrorMessage: string;
  projectCreationErrorMessage: string;
  projectListErrorMessage: string;
  projectApplyErrorMessage: string;
  projectEditionErrorMessage: string;
  userProfileErrorMessage: string;
}

export interface AppProps {
  verifyToken: Function;
  wsConnection: Function;
  showNavbar: boolean;
  getProjects: Function;
  getUsers: Function;
  login: boolean;
  register: boolean;
  user: { email: string; username: string } | null;
}

export interface NavState {
  user: { email: string; username: string } | null;
  search: string;
  focused: boolean;
  logout: Function;
  account: Element | null | undefined;
  mobile: Element | null | undefined;
  main: Element | null | undefined;
  getSearchValue: Function;
  openModal: Function;
  setSearchBarStatus: Function;
  history: any;
  setAccountMenu: Function;
  setMobileMenu: Function;
  setMainMenu: Function;
}

export interface HomeProps {
  loader: boolean;
  getProjects: Function;
  user: { email: string; username: string } | null;
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
  projectEditionSuccess: boolean | string;
}

export interface SearchState {
  search: string;
  focused: boolean;
  results: (User | Project)[];
}

export interface NavBarState {
  main: any;
  mobile: any;
  account: any;
}

export interface MessageState {
  messages: Messages[];
  chatWindow: ChatWindow[];
}
