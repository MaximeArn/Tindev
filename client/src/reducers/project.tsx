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
    application: {
      description: "",
    },
  },
};

const project = (
  state = initialState,
  { type, inputName, inputValue, teamSize, image, projects }: ProjectAction
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
    case "SET_PROJECT_IMAGE":
      return { ...state, createProject: { ...state.createProject, image } };
    case "SET_PROJECTS":
      return { ...state, projects };
    default:
      return state;
  }
};

export default project;
