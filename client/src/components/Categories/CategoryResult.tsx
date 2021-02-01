import React, { useEffect } from "react";
import { CategoryResultsProps } from "../../models/categories";

const CategoryResult = ({ fetchResults }: CategoryResultsProps) => {
  console.log("CATEGORY RESULT MOUNTED");
  useEffect(() => {
    fetchResults();
  }, []);

  return <div></div>;
};

export default CategoryResult;
