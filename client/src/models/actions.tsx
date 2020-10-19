/** @format */

import { MutableRefObject } from "react";
import { Category } from "./categories";
import { Project } from "./projects";

export interface AuthenticationAction {
  type: string;
  inputName: string;
  inputValue: string | number;
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
}

export interface ModalAction {
  type: string;
  modalStatus: boolean;
}

export interface ErrorAction {
  type: string;
  error: string;
}

export interface ProjectAction {
  type: string;
  inputName: string;
  inputValue: string;
  teamSize: number;
  image: MutableRefObject<any>;
  projects: Project[];
  project: Project;
}

export interface AuthMiddleware {
  type: string;
  history: any;
}

export interface CategoriesAction {
  type: string;
  categories: Category[];
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
