/** @format */
import { UserState } from "../models/users";
import { UserAction } from "../models/actions";
import updateListStyle from "../utils/updateListStyle";
import list from "../utils/userListContent";

const initialState: UserState = {
  users: [],
  user: null,
  list: list,
  editProfile: {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    city: "",
    age: undefined,
    avatar: null,
    introducing: "",
    experience: "",
    about: "",
  },
  profile: {
    owner: false,
    content: null,
  },
};

const users = (
  state = initialState,
  { type, users, user, content, listName }: UserAction
) => {
  switch (type) {
    case "SET_USERS":
      return { ...state, users };
    case "SET_USER":
      return { ...state, user };
    case "SET_CURRENT_CONTENT":
      return { ...state, profile: { ...state.profile, content } };
    case "SET_SELECTED_STATUS":
      return { ...state, list: updateListStyle(state.list, listName) };
    default:
      return state;
  }
};

export default users;
