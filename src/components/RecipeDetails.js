import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addLike, deleteLike } from "../actions";
import useLiked from "./hooks/useLiked";
import useCalcTime from "./hooks/useCalcTime";

const RecipeDetails = (props) => {
  const params = useParams().id;
  const dispatch = useDispatch();
  const recipeDetail = useSelector(
    (state) => state.getRecipeDetail.recipeDetail
  );
  const likedRecipes = useSelector((state) => state.handleLikes.likedRecipes);

  const [isLiked, deleteLiked] = useLiked();
  const [periods, calcTime] = useCalcTime();
  const ingredients = recipeDetail.ingredients;

  useEffect(() => {
    calcTime(ingredients);
  }, [ingredients, calcTime]);

  const handleLike = (params) => {
    const currentID = params;
    let likes = [...likedRecipes];

    // User has NOT yet liked the currect recipe
    if (!isLiked(currentID, likedRecipes)) {
      const like = {
        id: recipeDetail.recipe_id,
        title: recipeDetail.title,
        author: recipeDetail.publisher,
        img: recipeDetail.image_url,
      };
      dispatch(addLike(like));

      // User HAS liked the currect recipe
    } else {
      deleteLiked(params, likes);
      dispatch(deleteLike(likes));
    }
  };

  return (
    <div className="recipe__details">
      <div className="recipe__info">
        <i className="recipe__info-icon fa fa-stopwatch"></i>
        <span className="recipe__info-data recipe__info-data--minutes">
          {/* {calcTime()} */}
          {periods}
        </span>
        <span className="recipe__info-text"> minutes</span>
      </div>
      <div className="recipe__info">
        <i className="recipe__info-icon fa fa-users"></i>
        <span className="recipe__info-data recipe__info-data--people">4</span>
        <span className="recipe__info-text"> servings</span>
        <div className="recipe__info-buttons">
          {/* <button className="btn-tiny"></button>
          <button className="btn-tiny"></button> */}
        </div>
      </div>
      <button onClick={() => handleLike(params)} className="recipe__love">
        <i
          className={
            isLiked(params, likedRecipes) ? "fas fa-heart" : "far fa-heart"
          }
        ></i>
        {/* <i className="fas fa-heart"></i> */}
      </button>
    </div>
  );
};

export default RecipeDetails;
