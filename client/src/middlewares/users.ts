import { AnyAction, Dispatch, Middleware } from "redux";
import { AxiosSubmit } from "../models/axios";
import axios from "../utils/axiosInstance";

const getUsers = (dispatch: Dispatch<AnyAction>) => {
  axios
    .get("/users")
    .then(({ data: users }) => {
      dispatch({ type: "SET_USERS", users });
    })
    .catch((error) => console.log(error));
};

const getUserProfile = (dispatch: Dispatch<AnyAction>, username: string) => {
  dispatch({ type: "SET_USER_PROFILE_LOADER", value: true });
  axios
    .get(`/users/${username}`)
    .then(({ data: user }) => dispatch({ type: "SET_USER", user }))
    .catch(({ response: { data: { msg: error } } }) =>
      dispatch({ type: "toasts/error", message: error })
    )
    .finally(() => dispatch({ type: "SET_USER_PROFILE_LOADER", value: false }));
};

const updateUserProfile = ({ getState, dispatch }: AxiosSubmit, fieldName: string) => {
  const { editProfile } = getState().users;
  const formData = new FormData();

  const resetInputValues = (key?: string) => {
    dispatch({
      type: "SET_USER_PROFILE_VALUES",
      inputName: fieldName,
      key: key || null,
    });
  };

  fieldName === "password" || fieldName === "technos"
    ? formData.append(fieldName, JSON.stringify(editProfile[fieldName]))
    : formData.append(fieldName, editProfile[fieldName]);

  dispatch({ type: "SET_USER_PROFILE_EDITION_LOADER", value: true, fieldName });
  axios
    .patch("/users/update", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data: { msg: message, user } }) => {
      dispatch({ type: "SET_USER", user });
      dispatch({ type: "toasts/success", message });
    })
    .catch(({ response: { data: { msg: error } } }) =>
      dispatch({ type: "toasts/error", message: error })
    )
    .finally(() => {
      dispatch({ type: "SET_USER_PROFILE_EDITION_LOADER", value: false });
      fieldName === "password"
        ? Object.keys(editProfile[fieldName]).forEach((key) => resetInputValues(key))
        : resetInputValues();
    });
};

const deleteProfile = ({ dispatch, history }: AxiosSubmit, id: string) => {
  dispatch({ type: "SET_USER_DELETION_LOADER", value: true });
  axios
    .delete(`/users/${id}`)
    .then(({ data: { msg: message } }) => {
      axios.delete("/auth/logout").finally(() => {
        dispatch({ type: "RESET_GLOBAL_STATE" });
        dispatch({ type: "toasts/success", message });
        history.push("/");
      });
    })
    .catch(({ response }) => {
      dispatch({ type: "SET_USER_DELETION_LOADER", value: false });
      console.error(response);
    });
};

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, username, fieldName, id, history } = action;

  switch (type) {
    case "GET_USERS":
      getUsers(dispatch);
      break;
    case "GET_USER_PROFILE":
      getUserProfile(dispatch, username || getState().auth.user.username);
      break;
    case "UPDATE_USER_PROFILE":
      updateUserProfile({ getState, dispatch }, fieldName);
      break;
    case "DELETE_USER_ACCOUNT":
      deleteProfile({ dispatch, history }, id);
      break;
    default:
      next(action);
      break;
  }
};

export default project;
