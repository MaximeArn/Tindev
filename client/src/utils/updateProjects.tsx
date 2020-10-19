import { Project } from "../models/projects";

export default (project: Project, stateProjects: Project[]) => {
  const projects = [...stateProjects];
  const filter = projects.filter(({ _id }) => !(_id == project._id));
  filter.push(project);
  return filter;
};
