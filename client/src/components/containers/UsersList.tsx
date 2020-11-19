/** @format */

import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import UsersList from "../Users/UsersList/UsersList";

const mapState = ({ users: { users } }: State) => ({
  users,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getUsers: () => dispatch({ type: "GET_USERS" }),
});

export default connect(mapState, mapDispatch)(UsersList);
