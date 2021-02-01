import { EditProfile, EditProfilePasswords, UserState } from "../models/users";
import { UserAction } from "../models/actions";

const initialState: UserState = {
  users: [],
  user: {},
  editProfile: {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: {
      password: "",
      confirmPassword: "",
    },
    city: "",
    age: "",
    avatar: null,
    experience: "",
    about: "",
    technos: [],
  },
};

const users = (
  state = initialState,
  { type, users, user, inputName, inputValue, key }: UserAction
) => {
  switch (type) {
    case "SET_USERS":
      return { ...state, users };
    case "SET_USER":
      return { ...state, user };
    case "SET_USER_PROFILE_VALUES":
      return key
        ? {
            ...state,
            editProfile: {
              ...state.editProfile,
              [inputName]: {
                ...state.editProfile.password,
                [key]:
                  inputValue ||
                  initialState.editProfile.password[key as keyof EditProfilePasswords],
              },
            },
          }
        : {
            ...state,
            editProfile: {
              ...state.editProfile,
              [inputName]:
                inputValue || initialState.editProfile[inputName as keyof EditProfile],
            },
          };
    default:
      return state;
  }
};

export default users;
