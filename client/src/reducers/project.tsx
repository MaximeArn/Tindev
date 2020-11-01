/** @format */

import { ProjectState } from "../models/projects";
import { ProjectAction } from "../models/actions";
import updateProjects from "../utils/updateProjects";
import resetInputs from "../utils/resetInputs";

const initialState: ProjectState = {
  projects: [],
  createProject: {
    title: "",
    description: "",
    categories: [],
    size: undefined,
    image: null,
  },
  projectDetail: {
    owner: false,
    application: {
      description: "",
    },
  },
};

const project = (
  state = initialState,
  {
    type,
    inputName,
    inputValue,
    image,
    categories,
    projects,
    project,
    owner,
  }: ProjectAction
) => {
  switch (type) {
    case "GET_PROJECT_CREATION_VALUE":
      return {
        ...state,
        createProject: { ...state.createProject, [inputName]: inputValue },
      };
    case "RESET_PROJECT_CREATION_VALUES":
      return { ...state, createProject: resetInputs(state.createProject) };
    case "GET_PROJECT_DETAIL_MODAL_VALUE":
      return {
        ...state,
        projectDetail: {
          ...state.projectDetail,
          application: {
            ...state.projectDetail.application,
            [inputName]: inputValue,
          },
        },
      };
    case "SET_PROJECT_IMAGE":
      return { ...state, createProject: { ...state.createProject, image } };
    case "SET_PROJECTS":
      return { ...state, projects };
    case "SET_PROJECT":
      return { ...state, projects: updateProjects(project, state.projects) };
    case "ADD_PROJECT_ON_PROJECT_CREATION":
      return { ...state, projects: [...state.projects, project] };
    case "RESET_PROJECT_APPLY_FORM_VALUES":
      const { application: inputs } = state.projectDetail;
      return {
        ...state,
        projectDetail: {
          ...state.projectDetail,
          application: resetInputs(inputs),
        },
      };
    case "SET_PROJECT_OWNER":
      return { ...state, projectDetail: { ...state.projectDetail, owner } };
    default:
      return state;
  }
};

export default project;
