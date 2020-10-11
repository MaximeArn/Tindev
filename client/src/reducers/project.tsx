import { ProjectState } from "../models/projects";
import { ProjectAction } from "../models/actions";

const initialState: ProjectState = {
  projects: [],
  createProject: {
    title: "",
    description: "",
    image: null,
    category: "",
    size: undefined,
  },
};

const project = (state = initialState, { type }: ProjectAction) => {
  switch (type) {
    default:
      return state;
  }
};

export { project };
