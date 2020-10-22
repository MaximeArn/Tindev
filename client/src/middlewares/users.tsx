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

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  //   const {} = action;

  switch (action.type) {
    case "GET_USERS":
      getUsers(dispatch);
    default:
      next(action);
      break;
  }
};

export default project;
