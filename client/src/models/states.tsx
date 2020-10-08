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
}

export interface AuthenticationState {
  auth: Authentication;
  error: AuthenticationError;
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
}

export interface AuthenticationError {
  registerErrorMessage: string;
}
