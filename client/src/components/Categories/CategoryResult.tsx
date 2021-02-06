import React, { useEffect } from "react";
import { CategoryResultsProps } from "../../models/categories";
import Project from "../Projects/ProjectsList/Project";
import CircularProgress from "@material-ui/core/CircularProgress";
import User from "../Users/UsersList/userCard";

const CategoryResult = ({
  results,
  loader,
  fetchResults,
  location,
}: CategoryResultsProps) => {
  useEffect(() => {
    fetchResults();
  }, []);

  useEffect(() => {
    fetchResults();
  }, [location]);

  return (
    <div className="category-results">
      {loader ? (
        <div className="categories-loader">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : results.length ? (
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
