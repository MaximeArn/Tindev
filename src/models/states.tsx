export interface Authentication {
  showRegister: boolean;
  showLogin: boolean;
  register: {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    city?: string;
    age?: number | null;
  };

  login: {
    email: string;
    password: string;
  };
}

export interface AuthenticationState {
  auth: Authentication;
}
