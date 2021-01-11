import { Middleware } from "redux";
import axios from "axios";
import { url } from "../environments/api";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const admin: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, id, history, duration } = action;
  switch (type) {
    case "DELETE_PROJECT":
      dispatch({ type: "SET_ADMIN_DELETION_LOADER", value: true });
      axios
        .delete(`/admin/project/${id}`)
        .then(({ data: { message } }) => {
          dispatch({ type: "ADMIN_DELETION_SUCCESS_MESSAGE", message });
          dispatch({ type: "ADMIN_PANEL_ERROR_HANDLER" });
          dispatch({ type: "GET_PROJECTS" });
          history.push("/");
        })
        .catch(({ response: { data: { msg: error } } }) =>
          dispatch({ type: "ADMIN_PANEL_ERROR_HANDLER", error })
        )
        .finally(() =>
          dispatch({ type: "SET_ADMIN_DELETION_LOADER", value: false })
        );
      break;
    case "BAN_USER":
      dispatch({ type: "SET_ADMIN_DELETION_LOADER", value: true });
      axios
        .patch(`/admin/user/${id}`, { duration })
        .then(({ data: { message } }) => {
          dispatch({ type: "ADMIN_DELETION_SUCCESS_MESSAGE", message });
          dispatch({ type: "ADMIN_PANEL_ERROR_HANDLER" });
          dispatch({ type: "GET_USERS" });
          history.push("/users");
        })
        .catch(({ response: { data: { msg: error } } }) =>
          dispatch({ type: "ADMIN_PANEL_ERROR_HANDLER", error })
        )
        .finally(() =>
          dispatch({ type: "SET_ADMIN_DELETION_LOADER", value: false })
        );
      break;
    default:
      next(action);
      break;
  }
};

export default admin;
