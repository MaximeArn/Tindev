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
  password: {
    password: string;
    confirmPassword: string;
  };
  city: string;
  age: string;
  avatar: null;
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
  city?: string;
  experience?: string;
  about?: string;
  avatar?: string;
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
  getUser: Function;
}

export interface AuthUserState {
  email: string;
  username: string;
}

export interface EditUserProfile {
  user: User;
  error: string;
  success: boolean | string;
  isLoading: boolean;
  deleteSuccess: boolean | string;
  loader: {
    fieldName: string | null;
    status: boolean;
  };
  deleteModal: boolean;
  editProfile: EditProfile;
  getUserProfile: Function;
  updateUserProfile: Function;
  getEditProfileValue: Function;
  resetMessages: Function;
  deleteAccount: Function;
  setDeleteModalStatus: Function;
}

export interface Profile {
  name: string;
  loader: {
    fieldName: string | null;
    status: boolean;
  };
  inputValue: string | undefined;
  value: string;
  updateUserProfile: Function;
  getEditProfileValue: Function;
}

export interface UserProfileOpen {
  name: string;
  value: any;
  avatar: string | false;
  setEditStatus: Function;
  updateUserProfile: Function;
  getEditProfileValue: Function;
}

export interface UserProfileClosed {
  name: string;
  value: string | undefined;
  setEditStatus: Function;
}

export interface UserListProps {
  users: User[];
  getUsers: Function;
}
