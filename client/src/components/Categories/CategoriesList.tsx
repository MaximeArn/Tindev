import React, { useEffect } from "react";
import { CategoriesListProps } from "../../models/categories";
import Category from "./Category";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./categorieslist.scss";

const CategoriesList = ({ categories, loader, getCategories }: CategoriesListProps) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="categories">
      {loader ? (
        <div className="categories-loader">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : (
        categories.map((category) => <Category key={category.name} {...category} />)
      )}
    </div>
  );
};

export default CategoriesList;
