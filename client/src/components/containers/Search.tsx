import { connect } from "react-redux";
import { State } from "../../models/states";
import Search from "../Search/Search";

const mapState = ({ search: { results } }: State) => ({
  results,
});

export default connect(mapState)(Search);
