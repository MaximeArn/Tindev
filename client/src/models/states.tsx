/** @format */

import { string } from "prop-types";
import { LoaderOptions } from "ts-loader/dist/interfaces";

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

export interface AuthenticationState {
  auth: Authentication;
  error: AuthenticationError;
  loaders: Loaders;
}

export interface Loaders {
  registerLoader: boolean;
  loginLoader: boolean;
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
}

export interface LoginAuth {
  login: {
    email: string;
    password: string;
  };
  loginLoader: boolean;
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
