import React, { useEffect } from "react";
import { CategoryResultsProps } from "../../models/categories";

const CategoryResult = ({ fetchResults }: CategoryResultsProps) => {
  useEffect(() => {
    fetchResults();
  }, []);

  return <div></div>;
};

export default CategoryResult;
