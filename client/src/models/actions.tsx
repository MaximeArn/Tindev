/** @format */

import { MutableRefObject } from "react";
import { AuthenticationError } from "./states";
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
  modalStatus: boolean;
}

export interface AuthMiddleware {
  type: string;
  history: any;
}

export interface CategoriesAction {
  type: string;
  categories: Category[];
}
