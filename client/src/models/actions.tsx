import { AuthenticationError } from "./states";

export interface AuthenticationAction {
  type: string;
  inputName: string;
  inputValue: string | number;
}

export interface ErrorAction {
  type: string;
  error: string;
}

export interface AuthMiddleware {
  type: string;
}
