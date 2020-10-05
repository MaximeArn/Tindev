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
