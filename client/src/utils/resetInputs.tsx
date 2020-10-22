import { ProjectCreation } from "../models/projects";

const PROJECT_CREATION: any = {
  image: null,
  size: null,
  categories: [],
};

export default (inputs: any | ProjectCreation) => {
  const inputsCopy = { ...inputs };
  for (const key in inputsCopy) {
    PROJECT_CREATION.hasOwnProperty(key)
      ? (inputsCopy[key] = PROJECT_CREATION[key])
      : (inputsCopy[key] = "");
  }

  console.log("AFTER : ", inputsCopy);
  return inputsCopy;
};
