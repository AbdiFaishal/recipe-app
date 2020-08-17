import React from "react";
import Recipe from "./Recipe";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector } from "react-redux";
import useSlicedList from "./hooks/useSlicedList";

const RecipeList = () => {
  const [slicedList] = useSlicedList();

  const loading = useSelector((state) => state.getRecipes.isPending);
  const errorMessage = useSelector((state) => state.getRecipes.error);
  const recipeAPIResult = useSelector(
    (state) => state.getRecipes.recipeAPIResult
  );

  if (loading) {
    return <LoadingSpinner />;
  } else if (recipeAPIResult === 0) {
    return <p className="result__none">Sorry, no result found...</p>;
  }

  if (errorMessage !== "") {
    return <p className="result__none">{errorMessage}</p>;
  }

  return (
    <ul className="results__list">
      {slicedList.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </ul>
  );
};

export default RecipeList;
