import { ProjectCreation } from "../models/projects";
const resetProjectCreation = (key: string) => {
  return key === "image"
    ? null
    : key === "size"
    ? undefined
    : key === "categories"
    ? []
    : "";
};
export default (inputs: any | ProjectCreation) => {
  const inputsCopy = { ...inputs };
  for (const key in inputsCopy) {
    inputs.hasOwnProperty("image")
      ? (inputsCopy[key] = resetProjectCreation(key))
      : (inputsCopy[key] = "");
  }
  return inputsCopy;
};
