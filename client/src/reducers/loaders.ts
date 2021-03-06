import { Loaders } from "../models/states";
import { LoadersActions } from "../models/actions";

const initialState: Loaders = {
  registerLoader: false,
  loginLoader: false,
  removingContributorLoader: false,
  projectListLoader: false,
  projectCreationLoader: false,
  projectDetailsLoader: false,
  projectDeletionLoader: false,
  categoriesLoader: false,
  categoryResultsLoader: false,
  userProfileLoader: false,
  userAccountDeletionLoader: false,
  accountActivationLoader: false,
  newLinkLoader: false,
  forgotPasswordLoader: false,
  resetPasswordLoader: false,
  adminDeletionLoader: false,
  userProfileEditionLoader: {
    fieldName: null,
    status: false,
  },
  projectEditionLoader: {
    fieldName: null,
    loader: false,
  },
  manageApplicantLoader: {
    applicantId: null,
    loader: false,
  },
};

const loaders = (
  state = initialState,
  { type, value, applicantId, fieldName }: LoadersActions
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
    case "SET_CONTRIBUTOR_REMOVING_LOADER":
      return { ...state, removingContributorLoader: value };
    case "SET_ACCOUNT_ACTIVATION_LOADER":
      return { ...state, accountActivationLoader: value };
    case "SET_NEW_LINK_LOADER":
      return { ...state, newLinkLoader: value };
    case "SET_PROJECTLIST_LOADER":
      return { ...state, projectListLoader: value };
    case "SET_PROJECT_CREATION_LOADER":
      return { ...state, projectCreationLoader: value };
    case "SET_PROJECT_DELETION_LOADER":
      return { ...state, projectDeletionLoader: value };
    case "SET_CATEGORIES_LOADER":
      return { ...state, categoriesLoader: value };
    case "SET_CATEGORY_RESULTS_LOADER":
      return { ...state, categoryResultsLoader: value };
    case "SET_USER_PROFILE_EDITION_LOADER":
      return {
        ...state,
        userProfileEditionLoader: fieldName
          ? { fieldName, status: value }
          : { fieldName: null, status: value },
      };
    case "SET_USER_PROFILE_LOADER":
      return { ...state, userProfileLoader: value };
    case "SET_PROJECT_MANAGE_LOADER":
      return {
        ...state,
        manageApplicantLoader: { applicantId, loader: value },
      };
    case "SET_PROJECT_DETAILS_LOADER":
      return { ...state, projectDetailsLoader: value };
    case "SET_PROJECT_EDITION_LOADER":
      return {
        ...state,
        projectEditionLoader: {
          fieldName,
          loader: value,
        },
      };
    case "SET_USER_DELETION_LOADER":
      return { ...state, userAccountDeletionLoader: value };
    case "SET_FORGOT_PASSWORD_LOADER":
      return { ...state, forgotPasswordLoader: value };
    case "SET_RESET_PASSWORD_LOADER":
      return { ...state, resetPasswordLoader: value };
    case "SET_ADMIN_DELETION_LOADER":
      return { ...state, adminDeletionLoader: value };
    default:
      return state;
  }
};

export default loaders;
