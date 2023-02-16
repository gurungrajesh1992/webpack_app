import React from "react";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../categories/CategorySlice";

const MovieCategory = ({ categoryId }) => {
  const categories = useSelector(selectAllCategories);
  // console.log(categories);
  const category = categories.find((category) => category.id === categoryId);
  return (
    <p className="category">{category ? category.title : "Unknown Category"}</p>
  );
};

export default MovieCategory;
