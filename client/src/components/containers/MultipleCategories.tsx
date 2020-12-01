import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import MultipleCategories from "../Projects/ProjectCreation/MultipleCategories";

const mapState = ({
  categories: { categories },
  project: {
    createProject: { categories: categoriesFieldValues },
  },
  loaders: { projectCategoriesLoader: loader },
}: State) => ({
  categories,
  categoriesFieldValues,
  loader,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => {
  return {
    fetchCategories: () => dispatch({ type: "GET_CATEGORIES" }),
    getCategories: (inputName: string, inputValue: string[]) =>
      dispatch({
        type: "GET_PROJECT_CREATION_VALUE",
        inputName,
        inputValue,
      }),
    getUserTechnos: (inputName: string, inputValue: string[]) =>
      dispatch({ type: "SET_USER_PROFILE_VALUES", inputName, inputValue }),
  };
};
export default connect(mapState, mapDispatch)(MultipleCategories);
