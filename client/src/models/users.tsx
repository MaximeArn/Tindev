export interface UserState {
  users: User[];
  user: User | null;
  list: ListContent[];
  editProfile: EditProfile;
  profile: {
    owner: boolean;
    content: Function | null;
  };
}

export interface EditProfile {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  city: string;
  age: undefined;
  avatar: null;
  introducing: string;
  experience: string;
  about: string;
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
  password?: string;
  age?: number;
  city: string;
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

export interface EditUserProfile {
  user: User;
  editProfile: EditProfile;
  getUserProfile: Function;
}

export interface UserProfile {
  name: string;
  value: string;
}
