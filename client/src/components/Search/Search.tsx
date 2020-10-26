import React from "react";
import { SearchProps } from "../../models/search";
import { User } from "../../models/users";
import { Project as ProjectModel } from "../../models/projects";
import Project from "../Projects/ProjectsList/Project";
import UserCard from "../Users/UsersList/userCard";
import "./search.scss";

const Search = ({ results }: SearchProps) => {
  return (
    <div className="search-results">
      {results.map((result: any) => {
        const Component = result["author"] ? Project : UserCard;
        return <Component key={result._id} {...result} />;
      })}
    </div>
  );
};

export default Search;
