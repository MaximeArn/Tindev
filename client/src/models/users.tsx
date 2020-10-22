/** @format */

export interface UserState {
  users: User[];
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
