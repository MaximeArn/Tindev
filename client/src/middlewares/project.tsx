/** @format */

import { AnyAction, Dispatch, Middleware } from "redux";
import { url } from "../environments/api";
import { AxiosSubmit } from "../models/axios";
import axios from "axios";
import Project from "../components/ProjectDetail/Project";
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
    .catch((error) => {
      dispatch({
        type: "PROJECT_LIST_ERROR_HANDLER",
        error: "Oops... Something went wrong",
      });
    })
    .finally(() => dispatch({ type: "SET_PROJECTLIST_LOADER", value: false }));
};

const acceptApplicant = ({ project, applicant }: any) => {
  // console.log("project", project);
  // console.log("applicant", applicant);
  axios
    .patch(
      "/project/accept_applicant",
      { project, applicant },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  switch (action.type) {
    case "SEND_PROJECT":
      const { user } = getState().auth;
      user.username && sendProject({ getState, dispatch });
      break;
    case "GET_PROJECTS":
      setProjects(dispatch);
      break;
    case "ACCEPT_APPLICANT":
      acceptApplicant(action.data);
      break;
    default:
      next(action);
      break;
  }
};

export default project;
