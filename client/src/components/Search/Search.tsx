import React, { useEffect, useState } from "react";
import { SearchProps } from "../../models/search";
import { useLocation } from "react-router-dom";
import { User } from "../../models/users";
import { Project } from "../../models/projects";
import { Category } from "../../models/categories";
import "./search.scss";

const Search = ({ results, getRenderedComponent }: SearchProps) => {
  const [renderResults, setRenderResults] = useState<(User | Project | Category)[]>([]);

  useEffect(() => {
    setRenderResults(results);
  }, [useLocation()]);

  return (
    <div className="search-results">
      {renderResults.length ? (
        renderResults.map((result: any) => {
          const Component = getRenderedComponent(result);
          return <Component key={result._id} {...result} />;
        })
      ) : (
        <div className="search-results-empty">No results found</div>
      )}
    </div>
  );
};

export default Search;
