/** @format */

import { ProjectState } from "../models/projects";
import { ProjectAction } from "../models/actions";

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
    isModalOpen: false,
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
    modalStatus,
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
    case "SET_APPLY_MODAL_STATUS":
      return {
        ...state,
        projectDetail: { ...state.projectDetail, isModalOpen: modalStatus },
      };
    default:
      return state;
  }
};

export default project;
