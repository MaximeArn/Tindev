import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import SearchBarTray from "../NavBar/SearchBarTray";

const mapState = ({ search: { search, results } }: State) => ({
  search,
  results,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  sendSearchPreview: () => dispatch({ type: "SEND_SEARCH_PREVIEW" }),
});

export default connect(mapState, mapDispatch)(SearchBarTray);
