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
  setSearchTrayStatus: (focused: boolean) =>
    dispatch({ type: "SET_SEARCH_BAR_FOCUS_STATUS", focused }),
});

export default connect(mapState, mapDispatch)(SearchBarTray);
