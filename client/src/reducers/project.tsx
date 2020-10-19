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
    image: null,
    categories: "",
    size: undefined,
  },
  projectDetail: {
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
    teamSize,
    image,
    projects,
    project,
  }: ProjectAction
) => {
  switch (type) {
    case "GET_PROJECT_CREATION_VALUE":
      return {
        ...state,
        createProject: { ...state.createProject, [inputName]: inputValue },
      };
    case "GET_PROJECT_TEAM_SIZE":
      return {
        ...state,
        createProject: { ...state.createProject, size: teamSize },
      };
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
    case "RESET_PROJECT_APPLY_FORM_VALUES":
      const { application: inputs } = state.projectDetail;
      return {
        ...state,
        projectDetails: {
          ...state.projectDetail,
          application: resetInputs(inputs),
        },
      };
    default:
      return state;
  }
};

export default project;
