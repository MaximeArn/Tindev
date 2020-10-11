import { ProjectState, Project, Category } from "./projects";

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
  error: AuthenticationError;
  project: ProjectState;
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
}

export interface LoginAuth {
  login: {
    email: string;
    password: string;
  };
  submitLogin: Function;
  error: string;
}

export interface AuthenticationError {
  registerErrorMessage: string;
  loginErrorMessage: string;
}

export interface AppState {
  verifyToken: Function;
}

export interface NavState {
  user: { email: string; username: string } | null;
  logout: Function;
}

export interface ProjectCreationProps {
  projectInputs: Project;
  sendProject: Function;
  setProjectImage: Function;
}
