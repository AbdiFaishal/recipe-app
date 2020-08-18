import React from "react";
import RecipeFig from "./RecipeFig";
import RecipeDetails from "./RecipeDetails";
import RecipeIngredient from "./RecipeIngredient";
import RecipeDirections from "./RecipeDirections";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector } from "react-redux";

const RecipePage = () => {
  const recipeDetail = useSelector(
    (state) => state.getRecipeDetail.recipeDetail
  );

  const loadingDetail = useSelector((state) => state.getRecipeDetail.isPending);

  if (loadingDetail) {
    return <LoadingSpinner />;
  }
  return (
    recipeDetail.recipe_id && (
      <div className="recipe">
        <RecipeFig recipeDetail={recipeDetail} />
        <RecipeDetails recipeDetail={recipeDetail} />
        <RecipeIngredient recipeDetail={recipeDetail} />
        <RecipeDirections recipeDetail={recipeDetail} />
      </div>
    )
  );
};

export default RecipePage;
