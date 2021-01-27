import { AnyAction, Dispatch, Middleware } from "redux";
import { AxiosSubmit, AxiosApplicant } from "../models/axios";
import slugify from "../utils/slugify";
import unslugify from "../utils/unslugify";
import axios from "../utils/axiosInstance";

const sendProject = ({ getState, dispatch, history }: AxiosSubmit) => {
  const { createProject } = getState().project;
  const formData = new FormData();

  for (const key in createProject) {
    key === "categories"
      ? formData.append(key, JSON.stringify(createProject[key]))
      : formData.append(key, createProject[key]);
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
    .catch(({ response: { msg: error } }) => {
      dispatch({ type: "PROJECT_CREATION_ERROR_HANDLER", error });
    })
    .finally(() => dispatch({ type: "SET_PROJECT_CREATION_LOADER", value: false }));
};

const getProjects = (dispatch: Dispatch<AnyAction>) => {
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
    .catch(
      ({
        response: {
          data: { msg: error },
        },
      }) => {
        dispatch({ type: "PROJECT_APPLY_ERROR_HANDLER", error });
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
    .catch((error) => console.error(error))
    .finally(() => {
      dispatch({
        type: "SET_PROJECT_MANAGE_LOADER",
        value: false,
        applicantId: userId,
      });
      dispatch({ type: "GET_PROJECT_BY_ID", projectId });
    });
};

const updateProject = (
  { getState, dispatch, history }: AxiosSubmit,
  name: string,
  projectId: string,
  slug: string
) => {
  const { updateProject } = getState().project;
  const formData = new FormData();

  name === "categories"
    ? formData.append(name, JSON.stringify(updateProject[name]))
    : formData.append(name, updateProject[name]);

  dispatch({
    type: "SET_PROJECT_EDITION_LOADER",
    fieldName: name,
    value: true,
  });

  axios
    .patch(`/project/${projectId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data: { msg: message, project } }) => {
      dispatch({ type: "SET_PROJECT", project });
      dispatch({ type: "PROJECT_EDITION_SUCCESS_MESSAGE", message });
      !(slugify(project.title) === slug) &&
        history.push(`/project/${slugify(project.title)}/edit`);
    })

    .catch(({ response: { data } }) => {
      const { msg: error } = data;
      dispatch({ type: "PROJECT_EDITION_ERROR_HANDLER", error });
    })
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
      dispatch({ type: "PROJECT_DETAILS_ERROR_HANDLER" });
    })
    .catch(({ response: { data: { msg: error } } }) =>
      dispatch({ type: "PROJECT_DETAILS_ERROR_HANDLER", error })
    )
    .finally(() => dispatch({ type: "SET_PROJECT_DETAILS_LOADER", value: false }));
};

const leaveProject = (dispatch: Dispatch<AnyAction>, id: string) => {
  dispatch({ type: "SET_CONTRIBUTOR_REMOVING_LOADER", value: true });
  axios
    .patch(`/project/contributor`, { id })
    .then(({ data: project }) => {
      dispatch({ type: "SET_PROJECT", project });
    })
    .catch((error) => console.error(error))
    .finally(() => dispatch({ type: "SET_CONTRIBUTOR_REMOVING_LOADER", value: false }));
};

const deleteProject = (dispatch: Dispatch<AnyAction>, id: string) => {
  axios
    .delete(`/project/${id}`)
    .then(({ data: { msg: message } }) => {
      dispatch({ type: "PROJECT_DELETION_SUCCESS_MESSAGE", message });
      getProjects(dispatch);
    })
    .catch((error) => console.error(error));
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
    case "SEND_DELETE_PROJECT":
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
