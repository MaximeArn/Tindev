/** @format */

import { AnyAction, Dispatch, Middleware } from "redux";
import { url } from "../environments/api";
import axios from "axios";
import { AxiosSubmit } from "../models/axios";
import Cookies from "js-cookie";
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
  dispatch({ type: "SET_USER_PROFILE_LOADER", value: true });
  axios
    .get("/users/user")
    .then(({ data: user }) => dispatch({ type: "SET_USER", user }))
    .catch(({ response: { data } }) => console.error(data))
    .finally(() => dispatch({ type: "SET_USER_PROFILE_LOADER", value: false }));
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

  dispatch({ type: "SET_USER_PROFILE_EDITION_LOADER", value: true, fieldName });
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
      dispatch({ type: "SET_USER_PROFILE_EDITION_LOADER", value: false });
      fieldName === "password"
        ? Object.keys(editProfile[fieldName]).forEach((key) =>
            resetInputValues(key)
          )
        : resetInputValues();
    });
};

const deleteProfile = (dispatch: Dispatch<AnyAction>, id: string) => {
  dispatch({ type: "SET_USER_DELETION_LOADER", value: true });
  axios
    .delete(`/users/${id}`)
    .then(({ data: { msg: message } }) => {
      axios.delete("/auth/logout").finally(() => {
        Cookies.remove("token");
        dispatch({ type: "USER_DELETION_SUCCESS_MESSAGE", message });
      });
    })
    .catch(({ response }) => console.error(response))
    .finally(() =>
      dispatch({ type: "SET_USER_DELETION_LOADER", value: false })
    );
};

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, username, fieldName, id } = action;

  switch (type) {
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
      updateUserProfile({ getState, dispatch }, fieldName);
      break;
    case "DELETE_USER_ACCOUNT":
      deleteProfile(dispatch, id);
      break;
    default:
      next(action);
      break;
  }
};

export default project;
