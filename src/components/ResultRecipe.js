import React from "react";
import RecipeList from "./RecipeList";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const ResultRecipe = () => {
  const loading = useSelector((state) => state.getRecipes.isPending);

  return (
    <div className="results">
      <RecipeList />
      {loading ? null : <Pagination />}
    </div>
  );
};

export default ResultRecipe;
