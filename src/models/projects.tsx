/** @format */

export interface Projects {
  projects: Project[];
}

export interface Project {
  image: string;
  author: Author;
  title: Title;
  description: string;
  contributors: Contributor[];
  "avatar ": string;
}

export enum Author {
  John = "John",
}

export interface Contributor {
  name: Name;
}

export enum Name {
  Antho = "antho",
  Liv = "liv",
  Sylvain = "sylvain",
}

export enum Title {
  Tindev = "tindev",
}
