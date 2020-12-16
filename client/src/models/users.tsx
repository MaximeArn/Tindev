export interface UserState {
  users: User[];
  user: any | null;
  editProfile: EditProfile;
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
  technos: string[] | [];
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
  error: string;
  loader: boolean;
  getUser: Function;
}

export interface UserProfileInfos {
  name: string;
  value: string | string[];
}

export interface UserProps {
  openChatWindow: Function;
  infos: UserProfileInfos[];
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  age: number;
  city: string;
  experience?: string;
  technos?: string[];
  about?: string;
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
  loader: {
    fieldName: string | null;
    status: boolean;
  };
  deleteModal: boolean;
  deletionLoader: boolean;
  editProfile: EditProfile;
  getUserProfile: Function;
  updateUserProfile: Function;
  getEditProfileValue: Function;
  resetEditProfileValue: Function;
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
  value: string | null;
  updateUserProfile: Function;
  getEditProfileValue: Function;
  resetEditProfileValue: Function;
}

export interface UserProfileOpen {
  name: string;
  inputValue: any;
  value: string | null;
  setEditStatus: Function;
  updateUserProfile: Function;
  getEditProfileValue: Function;
  resetEditProfileValue: Function;
}

export interface UserProfileClosed {
  name: string;
  value: string | null;
  setEditStatus: Function;
}

export interface UserListProps {
  users: User[];
  getUsers: Function;
}

export interface UserTabProps {
  name: string;
  selected: string;
  setSelectedStatus: Function;
}

export interface UserTabPanelProps {
  content: any;
}

export interface AccountVerification {
  activateAccount: Function;
}
