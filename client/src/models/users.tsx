/** @format */

export interface UserState {
  users: User[];
  user: User | null;
  profile: {
    owner: boolean;
    content: Function | null;
  };
}

export interface User {
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  age: number;
  city: string;
  role: string;
}

export interface UserProfileProps {
  user: User;
  getUser: Function;
}

export interface UserProps {
  currentContent: Function;
  getCurrentContent: Function;
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  age: number;
  city: string;
  role: string;
}

export interface AuthUserState {
  email: string;
  username: string;
}
