import React from "react";
import { Category } from "../../models/categories";
import { url } from "../../environments/api";

const Category = ({ name, image }: Category) => {
  return (
    <div className="categories-card">
      <div className="categories-card-image">
        <img src={`${url}/uploads/categories/${image}`} alt={`${name}-image`} />
      </div>

      <div className="categories-card-footer">
        <div className="categories-card-footer-title">{name}</div>
      </div>
    </div>
  );
};

export default Category;
