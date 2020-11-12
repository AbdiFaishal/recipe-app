import React from 'react';
import RecipeFig from './RecipeFig';
import RecipeDetails from './RecipeDetails';
import RecipeIngredient from './RecipeIngredient';
import RecipeDirections from './RecipeDirections';
import LoadingSpinner from './LoadingSpinner';
import { useSelector } from 'react-redux';

// {
//    recipeDetail,
//    loadingDetail,
//   getRecipeDetail,
//    handleLike,
//    match,
//    likedRecipes,
//    isLiked,
// }
const RecipePage = () => {
  const recipeDetail = useSelector(
    (state) => state.getRecipeDetail.recipeDetail
  );
  const loadingDetail = useSelector((state) => state.getRecipeDetail.isPending);

  if (loadingDetail) {
    return <LoadingSpinner />;
  }
  if (recipeDetail.recipe_id) {
    return (
      <div className="recipe">
        <RecipeFig recipeDetail={recipeDetail} />
        <RecipeDetails
          // handleLike={handleLike}
          // likedRecipes={likedRecipes}
          // isLiked={isLiked}
          recipeDetail={recipeDetail}
        />
        <RecipeIngredient recipeDetail={recipeDetail} />
        <RecipeDirections recipeDetail={recipeDetail} />
      </div>
    );
  } else {
    return null;
  }
};

export default RecipePage;
