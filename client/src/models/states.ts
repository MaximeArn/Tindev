import { Category } from "./categories";
import { ProjectState } from "./projects";
import { UserState, AuthUserState } from "./users";
import { User } from "./users";
import { Project } from "./projects";
import { ChatWindow } from "./chat";
import { Notification } from "./notifications";
import { HasBeenSuspended } from "./socket";
import { InvalidToken } from "./token";

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
  forgotPassword: {
    email: string;
  };
  resetPassword: {
    password: string;
    confirmPassword: string;
  };
  user: AuthUserState;
  oAuth2AuthorizationUrl: null | string;
}

export interface State {
  auth: Authentication;
  error: ErrorState;
  success: SuccessState;
  categories: CategoriesState;
  project: ProjectState;
  loaders: Loaders;
  modal: ModalState;
  users: UserState;
  search: SearchState;
  navbar: NavBarState;
  message: MessageState;
  notifications: NotificationState;
}

export interface Loaders {
  registerLoader: boolean;
  loginLoader: boolean;
  removingContributorLoader: boolean;
  projectListLoader: boolean;
  projectDetailsLoader: boolean;
  projectCreationLoader: boolean;
  projectDeletionLoader: boolean;
  categoriesLoader: boolean;
  categoryResultsLoader: boolean;
  userProfileLoader: boolean;
  userAccountDeletionLoader: boolean;
  accountActivationLoader: boolean;
  forgotPasswordLoader: boolean;
  resetPasswordLoader: boolean;
  newLinkLoader: boolean;
  adminDeletionLoader: boolean;
  userProfileEditionLoader: {
    fieldName: string | null;
    status: boolean;
  };
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
  newLinkLoader: boolean;
  submitLogin: Function;
  error: {
    msg: string;
    userId?: null | string;
  };
  closeModal: Function;
  swapModal: Function;
  googleAuthorize: Function;
  sendActivationLink: Function;
  setForgotPasswordModalStatus: Function;
}

export interface ErrorState {
  auth: {
    registerErrorMessage: string;
    loginErrorMessage: {
      msg: string;
      userId?: null | string;
    };
  };
  projectDetailsErrorMessage: string;
  projectCreationErrorMessage: string;
  projectListErrorMessage: string;
  projectApplyErrorMessage: string;
  projectEditionErrorMessage: string;
  userProfileErrorMessage: string;
  userProfileEditionErrorMessage: string;
  accountActivationErrorMessage: string;
  forgotPasswordErrorMessage: string;
  resetPasswordErrorMessage: string;
  adminErrorMessage: string;
  newLinkVerificationErrorMessage: {
    msg: string;
    userId?: null | string;
  };
}

export interface AppProps {
  verifyToken: Function;
  wsConnection: Function;
  showNavbar: boolean;
  forgotPasswordModal: boolean;
  getProjects: Function;
  getNotifications: Function;
  getChatWindows: Function;
  verifyAuthorizationCode: Function;
  login: boolean;
  register: boolean;
  onAccountClosing: Function;
  userDeletionSuccess: string | boolean;
  user: { email: string; username: string } | null;
}

export interface NavState {
  user: AuthUserState | null;
  search: string;
  focused: boolean;
  logout: Function;
  results: (User | Project)[];
  counter: number;
  tray: boolean;
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
  setTrayStatus: Function;
  hasBeenSuspended: HasBeenSuspended;
  isTokenInvalid: InvalidToken;
  redirectUser: Function;
}

export interface HomeProps {
  loader: boolean;
  getProjects: Function;
}

export interface CategoriesState {
  categories: Category[];
  categoryResults: (Category & Project)[];
}

export interface ModalState {
  showNavbar: boolean;
  applyModal: boolean;
  deleteProjectModal: boolean;
  closeAccountModal: boolean;
  forgotPasswordModal: boolean;
  adminConfirmationModal: boolean;
  redirectionModal: boolean;
  projectOwnershipModal: boolean;
  leaveProjectModal: boolean;
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
  projectDeletionSuccess: boolean | string;
  userEditionSuccess: boolean | string;
  userDeletionSuccess: boolean | string;
  accountActivationSuccess: boolean | string;
  newLinkSuccess: boolean | string;
  forgotPasswordSuccess: boolean | string;
  resetPasswordSuccess: boolean | string;
  adminProjectDeletionSuccess: boolean | string;
  redirectionSuccess: boolean | string;
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
  hasBeenSuspended: HasBeenSuspended;
  isTokenInvalid: InvalidToken;
}

export interface MessageState {
  messages: { [key: string]: ChatWindow[] | [] };
  chatWindows: ChatWindow[];
}

export interface NotificationState {
  notifications: Notification;
  tray: boolean;
}

export interface ResetPasswordProps {
  inputs: {
    password: string;
    confirmPassword: string;
  };
  validityError: {
    msg: string;
    userId?: null | string;
  };
  submitForm: Function;
  newLinkSuccess: boolean | string;
  success: boolean | string;
  resetPasswordLinkLoader: boolean;
  resetPasswordLoader: boolean;
  verifyTokenValidity: Function;
  sendNewResetPasswordLink: Function;
}

export interface AdminOverlayProps {
  id: string;
  collection: string;
  loader: boolean;
  deleteProject: Function;
  modal: boolean;
  setModalStatus: Function;
  banUser: Function;
}

export interface RadioInputProps {
  duration: number | string;
  setDuration: Function;
}

export interface VisitorPageProps {
  redirectionModal?: boolean;
  message?: boolean | string;
  openModal: Function;
  setRedirectionModalStatus: Function;
}

export interface SuspendedAccountModalProps {
  message?: boolean | string;
  setModalStatus: Function;
}
