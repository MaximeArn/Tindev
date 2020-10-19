/** @format */

import { AnyAction, Dispatch, Middleware } from "redux";
import { url } from "../environments/api";
import { AxiosSubmit, AxiosApplicant } from "../models/axios";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const sendProject = ({ getState, dispatch }: AxiosSubmit) => {
  const { createProject } = getState().project;
  const formData = new FormData();

  for (const key in createProject) {
    formData.append(key, createProject[key]);
  }

  dispatch({ type: "SET_PROJECT_CREATION_LOADER", value: true });
  axios
    .post("/project/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "PROJECT_CREATION_ERROR_HANDLER", error });
    })
    .finally(() =>
      dispatch({ type: "SET_PROJECT_CREATION_LOADER", value: false })
    );
};

const setProjects = (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: "SET_PROJECTLIST_LOADER", value: true });
  axios
    .get("/project")
    .then(({ data: projects }) => {
      dispatch({ type: "SET_PROJECTS", projects });
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
    .post("/project/apply", {
      appliant: user,
      message: description,
      project: projectId,
    })
    .then(({ data: { msg } }) => {
      dispatch({ type: "APPLY_SUCCESS_MESSAGE", message: msg });
      dispatch({ type: "RESET_PROJECT_APPLY_FORM_VALUES" });
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "PROJECT_APPLY_ERROR_HANDLER", error });
    });
};

const acceptApplicant = ({
  dispatch,
  data: { projectId, userId, username },
}: AxiosApplicant) => {
  dispatch({
    type: "SET_PROJECT_MANAGE_LOADER",
    value: true,
    applicant: userId,
  });
  axios
    .patch("/project/accept_applicant", { projectId, userId, username })
    .then(({ data: project }) => dispatch({ type: "SET_PROJECT", project }))
    .catch((err) => console.log(err))
    .finally(() => {
      dispatch({
        type: "SET_PROJECT_MANAGE_LOADER",
        value: false,
        applicant: userId,
      });
      dispatch({ type: "GET_PROJECT_BY_ID", projectId });
    });
};

const declineApplicant = ({
  dispatch,
  data: { projectId, userId },
}: AxiosApplicant) => {
  dispatch({
    type: "SET_PROJECT_MANAGE_LOADER",
    value: true,
    applicant: userId,
  });
  axios
    .patch("/project/decline_applicant", { projectId, userId })
    .then(({ data: project }) => dispatch({ type: "SET_PROJECT", project }))
    .catch((error) => console.error(error))
    .finally(() => {
      dispatch({
        type: "SET_PROJECT_MANAGE_LOADER",
        value: false,
        applicant: userId,
      });
      dispatch({ type: "GET_PROJECT_BY_ID", projectId });
    });
};

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { user } = getState().auth;
  const { projectId } = action;
  const { data } = action;
  switch (action.type) {
    case "SEND_PROJECT":
      user.username && sendProject({ getState, dispatch });
      break;
    case "GET_PROJECTS":
      setProjects(dispatch);
      break;
    case "SEND_USER_APPLY":
      user && sendApply({ getState, dispatch }, projectId);
    case "ACCEPT_APPLICANT":
      acceptApplicant({ dispatch, data });
      break;
    case "DECLINE_APPLICANT":
      declineApplicant({ dispatch, data });
      break;
    default:
      next(action);
      break;
  }
};

export default project;
