import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import CategoriesList from "../Categories/CategoriesList";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getCategories: () => dispatch({ type: "GET_CATEGORIES" }),
});

export default connect(null, mapDispatch)(CategoriesList);
