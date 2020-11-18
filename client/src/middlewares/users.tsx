/** @format */

import { AnyAction, Dispatch, Middleware } from "redux";
import { url } from "../environments/api";
import axios from "axios";
import { AxiosSubmit } from "../models/axios";
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

const updateUserProfile = (
  { getState, dispatch }: AxiosSubmit,
  fieldName: string
) => {
  const { editProfile } = getState().users;
  const formData = new FormData();

  const resetInputValues = (key?: string) => {
    dispatch({
      type: "SET_USER_PROFILE_VALUES",
      inputName: fieldName,
      inputValue: "",
      key: key || null,
    });
  };

  fieldName === "password"
    ? formData.append(fieldName, JSON.stringify(editProfile[fieldName]))
    : formData.append(fieldName, editProfile[fieldName]);

  axios
    .patch("/users/update", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data: { msg: message, user } }) => {
      dispatch({ type: "SET_USER", user });
      dispatch({ type: "USER_EDITION_SUCCESS_MESSAGE", message });
    })
    .catch(({ response: { data: { msg: error } } }) =>
      dispatch({ type: "SET_USER_PROFILE_EDITION_ERROR_HANDLER", error })
    )
    .finally(() => {
      fieldName === "password"
        ? Object.keys(editProfile[fieldName]).forEach((key) =>
            resetInputValues(key)
          )
        : resetInputValues();
    });
};

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { username, fieldName } = action;

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
      console.log("UPDATE PROFILE");
      updateUserProfile({ getState, dispatch }, fieldName);
      break;
    default:
      next(action);
      break;
  }
};

export default project;
