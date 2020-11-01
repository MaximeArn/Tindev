import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import MultipleCategories from "../Projects/ProjectCreation/MultipleCategories";

const mapState = ({
  categories: { categories },
  project: {
    createProject: { categories: categoriesFieldValues },
  },
}: State) => ({
  categories,
  categoriesFieldValues,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => {
  return {
    getCategories: (inputName: string, inputValue: string[]) =>
      dispatch({
        type: "GET_PROJECT_CREATION_VALUE",
        inputName,
        inputValue,
      }),
  };
};
export default connect(mapState, mapDispatch)(MultipleCategories);
