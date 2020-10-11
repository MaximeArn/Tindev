import { ProjectState } from "../models/projects";
import { ProjectAction } from "../models/actions";
import categoriesData from "../data/categories.json";

const { categories } = categoriesData;
const initialState: ProjectState = {
  projects: [],
  categories,
  createProject: {
    title: "",
    description: "",
    image: null,
    category: "",
    size: undefined,
  },
};

const project = (
  state = initialState,
  { type, inputName, inputValue, teamSize }: ProjectAction
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

    default:
      return state;
  }
};

export default project;
