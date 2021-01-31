import React, { useEffect } from "react";
import { CategoriesListProps } from "../../models/categories";
import Category from "./Category";
import "./categorieslist.scss";

const CategoriesList = ({ categories, getCategories }: CategoriesListProps) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="categories">
      {categories.map((category) => (
        <Category {...category} />
      ))}
    </div>
  );
};

export default CategoriesList;
