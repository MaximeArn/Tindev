/** @format */

import { AnyAction, Dispatch, Middleware } from "redux";
import { url } from "../environments/api";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const getUsers = (dispatch: Dispatch<AnyAction>) => {
  axios
    .get("/users")
    .then(({ data: users }) => {
      dispatch({ type: "SET_USERS", users });
    })
    .catch((error) => console.log(error));
};

const getUser = (dispatch: Dispatch<AnyAction>, username: string) => {
  axios
    .get(`/users/${username}`)
    .then(({ data: user }) => {
      dispatch({ type: "SET_USER", user });
    })
    .catch(({ response: { data: { msg: error } } }) =>
      dispatch({ type: "USER_PROFILE_ERROR_HANDLER", error })
    );
};

const getUserProfile = (dispatch: Dispatch<AnyAction>) => {
  axios
    .get("/users/user")
    .then(({ data: user }) => dispatch({ type: "SET_USER", user }))
    .catch(({ response: { data } }) => console.error(data));
};

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { username } = action;

  switch (action.type) {
    case "GET_USERS":
      getUsers(dispatch);
      break;
    case "GET_USER":
      getUser(dispatch, username);
      break;
    case "GET_USER_PROFILE":
      getUserProfile(dispatch);
      break;
    case "UPDATE_USER_PROFILE":
      //TODO: create profile edition function
      break;
    default:
      next(action);
      break;
  }
};

export default project;
