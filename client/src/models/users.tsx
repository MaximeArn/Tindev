/** @format */

export interface UserState {
  users: User[];
  user: User | null;
  list: ListContent[];
  profile: {
    owner: boolean;
    content: Function | null;
  };
}

export interface ListContent {
  name: string;
  component: Function;
  selected?: boolean;
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
  setSelectedStatus: Function;
  openChatWindow: Function;
  list: ListContent[];
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  age: number;
  city: string;
  role: string;
  getUser: Function;
}

export interface AuthUserState {
  email: string;
  username: string;
}
