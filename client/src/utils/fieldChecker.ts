import { Project } from "../models/projects";
export default ({ _id, contributors, applicants, __v, ...editable }: Project) => editable;
