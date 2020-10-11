/** @format */

export interface ProjectCard {
  image: string;
  author: string;
  title: string;
  description: string;
  contributors: Contributor[];
  avatar: string;
}

export interface Contributor {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  image: any;
  category: string;
  size: number | undefined;
}

export interface Categories {
  name: string;
  color?: string;
}

export interface ProjectState {
  projects: Project[];
  categories: Categories[];
  createProject: Project;
}
