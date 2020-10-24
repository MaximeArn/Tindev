/** @format */
import { UserState } from "../models/users";
import { UserAction } from "../models/actions";

const initialState: UserState = {
  users: [],
  user: null,
};

const users = (state = initialState, { type, users, user }: UserAction) => {
  switch (type) {
    case "SET_USERS":
      return { ...state, users };
    case "SET_USER":
      return { ...state, user };
    default:
      return state;
  }
};

export default users;
