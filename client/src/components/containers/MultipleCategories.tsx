import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import MultipleCategories from "../MultipleCategories/MultipleCategories";

const mapState = ({
  categories: { categories },
  project: {
    createProject: { categories: categoriesFieldValues },
  },
  loaders: { projectCategoriesLoader: loader },
  users: {
    editProfile: { technos },
  },
}: State) => ({
  categories,
  categoriesFieldValues,
  technos,
  loader,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => {
  const getProjectCreationCategories = (inputName: string, inputValue: string[]) =>
    dispatch({
      type: "GET_PROJECT_CREATION_VALUE",
      inputName,
      inputValue,
    });

  const getUserTechnos = (inputName: string, inputValue: string[]) =>
    dispatch({ type: "SET_USER_PROFILE_VALUES", inputName, inputValue });

  const getProjectUpdateCategories = (inputName: string, inputValue: string) =>
    dispatch({ type: "GET_PROJECT_UPDATE_VALUE", inputName, inputValue });

  return {
    fetchCategories: () => dispatch({ type: "GET_CATEGORIES" }),
    getSelectedValues: {
      projectCreationCategories: getProjectCreationCategories,
      projectUpdateCategories: getProjectUpdateCategories,
      userTechnos: getUserTechnos,
    },
  };
};
export default connect(mapState, mapDispatch)(MultipleCategories);
