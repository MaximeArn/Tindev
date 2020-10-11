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
  { type, inputName, inputValue }: ProjectAction
) => {
  switch (type) {
    case "GET_PROJECT_CREATION_VALUE":
      console.log("PROJECT CREATION :", inputName, inputValue);
      break;
    default:
      return state;
  }
};

export default project;
