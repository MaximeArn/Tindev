import { Project } from "../models/projects";
export default ({
  _id,
  author,
  contributors,
  applicants,
  __v,
  ...editable
}: Project) => editable;
