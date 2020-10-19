/** @format */

import { Loaders } from "../models/states";
import { LoadersActions } from "../models/actions";

const initialState: Loaders = {
  registerLoader: false,
  loginLoader: false,
  projectListLoader: false,
  projectCreationLoader: false,
  projectCategoriesLoader: false,
  manageApplicantLoader: {
    applicantId: null,
    loader: false,
  },
};

const loaders = (
  state = initialState,
  { type, value, applicantId }: LoadersActions
) => {
  switch (type) {
    case "SET_REGISTER_LOADER":
      return {
        ...state,
        registerLoader: value,
      };
    case "SET_LOGIN_LOADER":
      return {
        ...state,
        loginLoader: value,
      };
    case "SET_PROJECTLIST_LOADER":
      return { ...state, projectListLoader: value };
    case "SET_PROJECT_CREATION_LOADER":
      return { ...state, projectCreationLoader: value };
    case "SET_PROJECT_CATEGORIES_LOADER":
      return { ...state, projectCategoriesLoader: value };
    case "SET_PROJECT_MANAGE_LOADER":
      return {
        ...state,
        manageApplicantLoader: { applicantId, loader: value },
      };
    default:
      return state;
  }
};

export default loaders;
