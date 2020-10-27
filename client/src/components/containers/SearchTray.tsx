import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import SearchTray from "../NavBar/SearchTray";

const mapState = ({ search: { search, results } }: State) => ({
  search,
  results,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  sendSearchPreview: () => dispatch({ type: "SEND_RESEARCH", history: null }),
});

export default connect(mapState, mapDispatch)(SearchTray);
