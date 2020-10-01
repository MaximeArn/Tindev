export interface Authentication {
  register: {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    city: string;
    age?: number | null;
    role: string;
  };
  login: {
    email: string;
    password: string;
  };
}
