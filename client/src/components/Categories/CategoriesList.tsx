import React, { useEffect } from "react";
import { CategoriesListProps } from "../../models/categories";
import "./categorieslist.scss";

const CategoriesList = ({ getCategories }: CategoriesListProps) => {
  useEffect(() => {
    getCategories();
  }, []);

  return <div className="categories">CATEGORIES WORKS</div>;
};

export default CategoriesList;
