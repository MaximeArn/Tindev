import { ProjectState } from "../models/projects";
import { ProjectAction } from "../models/actions";

const initialState: ProjectState = {
  projects: [],
  project: null,
  createProject: {
    title: "",
    description: "",
    categories: [],
    size: "",
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
  { type, inputName, inputValue, image, projects, project, owner }: ProjectAction
) => {
  switch (type) {
    case "GET_PROJECT_CREATION_VALUE":
      return {
        ...state,
        createProject: {
          ...state.createProject,
          [inputName]: inputValue ? inputValue : inputName === "categories" ? [] : "",
        },
      };
    case "RESET_PROJECT_CREATION_VALUES":
      return { ...state, createProject: initialState.createProject };
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
      return {
        ...state,
        project,
      };
    case "ADD_PROJECT_ON_PROJECT_CREATION":
      return { ...state, projects: [...state.projects, project] };
    case "RESET_PROJECT_APPLY_FORM_VALUES":
      return {
        ...state,
        projectDetail: {
          ...state.projectDetail,
          application: initialState.projectDetail.application,
        },
      };
    case "SET_PROJECT_OWNER":
      return { ...state, projectDetail: { ...state.projectDetail, owner } };
    default:
      return state;
  }
};

export default project;
