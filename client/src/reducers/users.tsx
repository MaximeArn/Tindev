/** @format */
import { UserState } from "../models/users";
import { UserAction } from "../models/actions";

const initialState: UserState = {
  users: [],
  user: null,
  profile: {
    owner: false,
    content: null,
  },
};

const users = (
  state = initialState,
  { type, users, user, content }: UserAction
) => {
  switch (type) {
    case "SET_USERS":
      return { ...state, users };
    case "SET_USER":
      return { ...state, user };
    case "SET_CURRENT_CONTENT":
      return { ...state, profile: { ...state.profile, content } };
    default:
      return state;
  }
};

export default users;
