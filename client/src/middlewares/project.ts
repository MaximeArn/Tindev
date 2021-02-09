import { AnyAction, Dispatch, Middleware } from "redux";
import { AxiosSubmit, AxiosApplicant } from "../models/axios";
import slugify from "../utils/slugify";
import unslugify from "../utils/unslugify";
import { successToast, errorToast } from "../utils/toastify";
import axios from "../utils/axiosInstance";

const sendProject = ({ getState, dispatch, history }: AxiosSubmit) => {
  const { createProject } = getState().project;
  const formData = new FormData();

  for (const key in createProject) {
    key === "categories" ? formData.append(key, JSON.stringify(createProject[key])) : formData.append(key, createProject[key]);
  }

  dispatch({ type: "SET_PROJECT_CREATION_LOADER", value: true });
  axios
    .post("/project/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data: project }) => {
      dispatch({ type: "ADD_PROJECT_ON_PROJECT_CREATION", project });
      history.push(`/project/${slugify(project.title)}`);
    })

    .catch(
      ({
        response: {
          data: { msg: error },
        },
      }) => {
        dispatch({ type: "toasts/error", message: error });
      }
    )
    .finally(() => dispatch({ type: "SET_PROJECT_CREATION_LOADER", value: false }));
};

const getProjects = (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: "SET_PROJECTLIST_LOADER", value: true });
  axios
    .get("/project")
    .then(({ data: projects }) => {
      dispatch({ type: "SET_PROJECTS", projects });
    })
    .catch(({ error }) => {
      dispatch({
        type: "toasts/error",
        message: error,
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
      dispatch({ type: "toasts/success", message: msg });
      dispatch({ type: "RESET_PROJECT_APPLY_FORM_VALUES" });
    })
    .catch(
      ({
        response: {
          data: { msg: error },
        },
      }) => {
        dispatch({ type: "toasts/error", message: error });
      }
    );
};

const acceptApplicant = ({ dispatch, data }: AxiosApplicant) => {
  const { projectId, userId } = data;
  dispatch({
    type: "SET_PROJECT_MANAGE_LOADER",
    value: true,
    applicantId: userId,
  });
  axios
    .patch("/project/accept_applicant", data)
    .then(({ data: project }) => {
      dispatch({ type: "SET_PROJECT", project });
      dispatch({ type: "GET_PROJECTS" });
    })
    .catch((err) => console.log(err))
    .finally(() => {
      dispatch({
        type: "SET_PROJECT_MANAGE_LOADER",
        value: false,
        applicantId: userId,
      });
      dispatch({ type: "GET_PROJECT_BY_ID", projectId });
    });
};

const declineApplicant = ({ dispatch, data: { projectId, userId } }: AxiosApplicant) => {
  dispatch({
    type: "SET_PROJECT_MANAGE_LOADER",
    value: true,
    applicantId: userId,
  });
  axios
    .patch("/project/decline_applicant", { projectId, userId })
    .then(({ data: project }) => dispatch({ type: "SET_PROJECT", project }))
    .catch((error) => dispatch({ type: "toasts/error", message: error }))
    .finally(() => {
      dispatch({
        type: "SET_PROJECT_MANAGE_LOADER",
        value: false,
        applicantId: userId,
      });
      dispatch({ type: "GET_PROJECT_BY_ID", projectId });
    });
};

const updateProject = ({ getState, dispatch, history }: AxiosSubmit, name: string, projectId: string, slug: string) => {
  const { updateProject } = getState().project;
  const formData = new FormData();

  name === "categories" ? formData.append(name, JSON.stringify(updateProject[name])) : formData.append(name, updateProject[name]);

  dispatch({
    type: "SET_PROJECT_EDITION_LOADER",
    fieldName: name,
    value: true,
  });

  axios
    .patch(`/project/${projectId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data: { message, project, username } }) => {
      dispatch({ type: "SET_PROJECT", project });
      dispatch({ type: "PROJECT_DELETION_SUCCESS_MESSAGE", message });
      dispatch({ type: "toasts/success", message });
      project.author !== username && history.push(`/project/${slugify(project.title)}`);

      !(slugify(project.title) === slug) && history.push(`/project/${slugify(project.title)}/edit`);
    })

    .catch(
      ({
        response: {
          data: { error },
        },
      }) => {
        dispatch({ type: "toasts/error", message: error });
      }
    )
    .finally(() =>
      dispatch({
        type: "SET_PROJECT_EDITION_LOADER",
        fieldName: null,
        value: false,
      })
    );
};

const getProject = (dispatch: Dispatch<AnyAction>, slug: string) => {
  dispatch({ type: "SET_PROJECT_DETAILS_LOADER", value: true });
  axios
    .get(`/project/${unslugify(slug)}`)
    .then(({ data: project }) => {
      dispatch({ type: "SET_PROJECT", project });
    })
    .catch(({ response: { data: { msg: error } } }) => dispatch({ type: "toasts/error", message: error }))
    .finally(() => dispatch({ type: "SET_PROJECT_DETAILS_LOADER", value: false }));
};

const leaveProject = (dispatch: Dispatch<AnyAction>, id: string) => {
  dispatch({ type: "SET_CONTRIBUTOR_REMOVING_LOADER", value: true });
  axios
    .patch(`/project/contributor`, { id })
    .then(({ data: project }) => {
      dispatch({ type: "SET_PROJECT", project });
    })
    .catch(({ response: { data: { msg: error } } }) => errorToast(error))
    .finally(() => {
      dispatch({ type: "SET_CONTRIBUTOR_REMOVING_LOADER", value: false });
      dispatch({ type: "SET_LEAVE_PROJECT_MODAL", modalStatus: false });
    });
};

const deleteProject = (dispatch: Dispatch<AnyAction>, id: string) => {
  dispatch({ type: "SET_PROJECT_DELETION_LOADER", value: true });
  axios
    .delete(`/project/${id}`)
    .then(({ data: { msg: message } }) => {
      dispatch({ type: "toasts/success", message });
      getProjects(dispatch);
    })
    .catch((error) => dispatch({ type: "toasts/error", message: error }))
    .finally(() => dispatch({ type: "SET_PROJECT_DELETION_LOADER", value: false }));
};

const verifyOwner = (projectAuthor: string, dispatch: Dispatch<AnyAction>) => {
  axios
    .post("/project/verify_owner", { projectAuthor })
    .then(({ data: owner }) => dispatch({ type: "SET_PROJECT_OWNER", owner }))
    .catch((error) => console.error(error));
};

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { data, projectAuthor, projectId, history, inputName, slug, id } = action;

  switch (action.type) {
    case "SEND_PROJECT":
      sendProject({ getState, dispatch, history });
      break;
    case "GET_PROJECTS":
      getProjects(dispatch);
      break;
    case "GET_PROJECT":
      getProject(dispatch, slug);
      break;
    case "UPDATE_PROJECT":
      updateProject({ getState, dispatch, history }, inputName, projectId, slug);
      break;
    case "DELETE_PROJECT":
      deleteProject(dispatch, id);
      break;
    case "LEAVE_PROJECT":
      leaveProject(dispatch, id);
      break;
    case "SEND_USER_APPLY":
      sendApply({ getState, dispatch }, projectId);
      break;
    case "ACCEPT_APPLICANT":
      acceptApplicant({ dispatch, data });
      break;
    case "DECLINE_APPLICANT":
      declineApplicant({ dispatch, data });
      break;
    case "VERIFY_OWNER":
      verifyOwner(projectAuthor, dispatch);
    default:
      next(action);
      break;
  }
};

export default project;
