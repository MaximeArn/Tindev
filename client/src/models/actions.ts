import { MutableRefObject } from "react";
import { Project } from "./projects";
import { Category } from "./categories";
import { User } from "./users";
import { ChatWindow, SocketServerResponse } from "./chat";
import { Notification } from "./notifications";
import { OAuth2AuthorizationResponse } from "./token";

export interface AuthenticationAction {
  type: string;
  inputName: string;
  inputValue: string | number;
  authType: string;
  credentials: {
    token?: string;
    username: string;
    email: string;
  };
}

export interface LoadersActions {
  type: string;
  value: string;
  applicantId: string;
  fieldName: string;
}

export interface ModalAction {
  type: string;
  modal: string;
  modal2: string;
  modalStatus: boolean;
  applicant: string | null;
}

export interface ErrorAction {
  type: string;
  error: string;
}

export interface ProjectAction {
  type: string;
  inputName: string;
  inputValue: string | number | string[];
  image: MutableRefObject<any>;
  projects: Project[];
  project: Project;
  owner: boolean;
}

export interface AuthMiddleware {
  type: string;
  token: string;
  userId: string;
  linkType: string;
  email: string;
  message: string;
  history: any;
  authorizationCode: OAuth2AuthorizationResponse;
}

export interface CategoriesAction {
  type: string;
  categories: Category[];
  categoryResults: (Project & Category)[];
}

export interface SuccessAction {
  type: string;
  message: string;
}

export interface ApplicantAction {
  projectId: string;
  userId: string;
  username?: string;
}

export interface UserAction {
  type: string;
  users: User[];
  user: User;
  inputName: string;
  inputValue: string;
  key?: string;
}

export interface SearchAction {
  type: string;
  value: string;
  focused: boolean;
  result: (User | Project)[];
}

export interface NavBarAction {
  type: string;
  status: React.MouseEvent<HTMLElement> | null;
  message: string;
}

export interface MessageAction {
  type: string;
  message: SocketServerResponse;
  chatWindows: ChatWindow[];
}

export interface NotificationAction {
  type: string;
  notifications: Notification;
}
