import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { withRouter } from "react-router-dom";
import CategoryResult from "../Categories/CategoryResult";
import { OwnProps } from "../../models/connect";

const mapDispatch = (
  dispatch: Dispatch<AnyAction>,
  {
    match: {
      params: { cat },
    },
  }: OwnProps
) => ({
  fetchResults: () => dispatch({ type: "GET_CATEGORY_RESULTS", cat }),
});

export default withRouter(connect(null, mapDispatch)(CategoryResult));
