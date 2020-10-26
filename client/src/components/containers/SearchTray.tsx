import { connect } from "react-redux";
import { State } from "../../models/states";
import SearchBarTray from "../NavBar/SearchBarTray";

const mapState = ({ search: { search } }: State) => ({ search });

export default connect(mapState)(SearchBarTray);
