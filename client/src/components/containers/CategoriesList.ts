import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import CategoriesList from "../Categories/CategoriesList";

const mapState = ({
  categories: { categories },
  loaders: { categoriesLoader: loader },
}: State) => ({
  categories,
  loader,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getCategories: () => dispatch({ type: "GET_CATEGORIES" }),
});

export default connect(mapState, mapDispatch)(CategoriesList);
