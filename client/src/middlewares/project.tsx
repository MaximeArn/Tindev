/** @format */

import { AnyAction, Dispatch, Middleware } from "redux";
import { url } from "../environments/api";
import { AxiosSubmit } from "../models/axios";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

const sendProject = ({ getState, dispatch }: AxiosSubmit) => {
  const { createProject } = getState().project;
  const {
    user: { username },
  } = getState().auth;

  const formData = new FormData();
  formData.append("author", username);

  for (const key in createProject) {
    formData.append(key, createProject[key]);
  }

  axios.post("/project/create", formData).catch(({ response }) => {
    const { msg: error } = response.data;
    dispatch({ type: "PROJECT_CREATION_ERROR_HANDLER", error });
  });
};

const setProjects = (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: "SET_PROJECTLIST_LOADER", value: true });
  axios
    .get("/project")
    .then((res) => {
      const { data: dbProjects } = res;
      dispatch({ type: "SET_PROJECTS", projects: dbProjects });
    })
    .catch(() => {
      dispatch({
        type: "PROJECT_LIST_ERROR_HANDLER",
        error: "Oops... Something went wrong",
      });
    })
    .finally(() => dispatch({ type: "SET_PROJECTLIST_LOADER", value: false }));
};

const sendApply = ({ getState, dispatch }: AxiosSubmit, projectId: string) => {
  const { user } = getState().auth;
  const {
    application: { description },
  } = getState().project.projectDetail;

  axios
    .post(
      "/project/apply",
      { appliant: user, message: description, project: projectId },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { user } = getState().auth;
  switch (action.type) {
    case "SEND_PROJECT":
      user.username && sendProject({ getState, dispatch });
      break;
    case "GET_PROJECTS":
      setProjects(dispatch);
      break;
    case "SEND_USER_APPLY":
      user && sendApply({ getState, dispatch }, action.project);
      break;
    default:
      next(action);
      break;
  }
};

export default project;
