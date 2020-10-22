/** @format */

import { connect } from "react-redux";
import { State } from "../../models/states";
import UsersList from "../Users/UsersList/UsersList";

const mapState = (state: State) => {
  const { users } = state.users;
  return { users };
};

export default connect(mapState)(UsersList);
