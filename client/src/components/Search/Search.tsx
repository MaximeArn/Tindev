import React from "react";
import { SearchProps } from "../../models/search";
import Project from "../Projects/ProjectsList/Project";
import UserCard from "../Users/UsersList/userCard";
import "./search.scss";

const Search = ({ results }: SearchProps) => {
  return (
    <div className="search-results">
      {results.length ? (
        results.map((result: any) => {
          const Component = result.author ? Project : UserCard;
          return <Component key={result._id} {...result} />;
        })
      ) : (
        <div className="search-results-empty">No results found</div>
      )}
    </div>
  );
};

export default Search;
