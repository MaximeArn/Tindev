import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { SelectedContent } from "../../models/search";
import { State } from "../../models/states";
import SearchTray from "../NavBar/SearchTray";

const mapState = ({ search: { results } }: State) => ({
  results,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setSelectedContent: (selectedContent: SelectedContent) => {
    dispatch({ type: "SET_SELECTED_CONTENT", selectedContent });
  },
});

export default connect(mapState, mapDispatch)(SearchTray);
