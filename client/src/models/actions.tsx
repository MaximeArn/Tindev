/** @format */

import { AuthenticationError } from "./states";

export interface AuthenticationAction {
  type: string;
  inputName: string;
  inputValue: string | number;
  credentials: {
    token: string;
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

export interface AuthMiddleware {
  type: string;
  history: any;
}
