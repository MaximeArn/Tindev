import { SelectedContent } from "./search";

export interface UserState {
  users: User[];
  user: any;
  editProfile: EditProfile;
}

export interface EditProfile {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: EditProfilePasswords;
  city: string;
  age: string;
  avatar: null;
  experience: string;
  about: string;
  technos: string[] | [];
}

export interface EditProfilePasswords {
  password: string;
  confirmPassword: string;
}

export interface User {
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  password?: string;
  age?: number;
  city?: string;
  experience: string;
  about: string;
  technos: string[] | [];
  avatar?: string;
}

export interface UserProfileProps {
  admin: boolean;
  user: User;
  error: string;
  loader: boolean;
  content: null | SelectedContent;
  getUser: Function;
  openChatWindow: Function;
}

export interface UserProfileInfos {
  // name: string;
  // value: string | string[];
  about: string;
  technos: string[];
  experience: string;
}

export interface UserProps {
  openChatWindow: Function;
  infos: UserProfileInfos;
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  age?: number;
  city?: string;
  avatar?: string;
  experience: string;
  technos: string[] | [];
  about: string;
}

export interface AuthUserState {
  email: string;
  username: string;
  role: string;
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
  newLinkSuccess: boolean | string;
  activationSuccess: boolean | string;
  newLinkVerificationErrorMessage: {
    msg: string;
    userId?: string;
  };
  accountActivationErrorMessage: string;
  accountActivationLoader: boolean;
  newLinkLoader: boolean;
  activateAccount: Function;
  checkTokenValidity: Function;
  sendActivationLink: Function;
}
