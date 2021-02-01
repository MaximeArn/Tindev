import React, { useEffect } from "react";
import { CategoryResultsProps } from "../../models/categories";
import Project from "../Projects/ProjectsList/Project";
import User from "../Users/UsersList/userCard";

const CategoryResult = ({ results, fetchResults }: CategoryResultsProps) => {
  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="category-results">
      {results.length ? (
        results.map((result: any) => {
          const Component = result.author ? Project : User;
          return <Component key={result._id} {...result} />;
        })
      ) : (
        <div className="category-results-empty">No results found</div>
      )}
    </div>
  );
};

export default CategoryResult;
