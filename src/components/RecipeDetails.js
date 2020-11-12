import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addLike, deleteLike } from '../actions';
import useLiked from './hooks/useLiked';

// {handleLike, likedRecipes, isLiked, recipeDetail}

const RecipeDetails = () => {
  const params = useParams().id;
  const dispatch = useDispatch();
  const recipeDetail = useSelector(
    (state) => state.getRecipeDetail.recipeDetail
  );
  const likedRecipes = useSelector((state) => state.handleLikes.likedRecipes);

  const [isLiked, deleteLiked] = useLiked();

  // const isLiked = (id, state) => {
  //   return state.findIndex((el) => el.id === id) !== -1;
  // };

  // const deleteLiked = (id, target) => {
  //   const index = target.findIndex((el) => el.id === id);
  //   target.splice(index, 1);
  // };

  const handleLike = (params) => {
    const currentID = params;
    let likes = [...likedRecipes];

    // User has NOT yet liked the currect recipe and add it
    // !isLiked(currentID, likedRecipes)
    if (!isLiked(currentID, likedRecipes)) {
      const like = {
        id: recipeDetail.recipe_id,
        title: recipeDetail.title,
        author: recipeDetail.publisher,
        img: recipeDetail.image_url,
      };
      dispatch(addLike(like));

      // User HAS liked the currect recipe and delete it
    } else {
      deleteLiked(params, likes);
      dispatch(deleteLike(likes));
    }
  };

  const calcTime = () => {
    // Assuming that we need 15 min for each 3 ingredient
    const numIng = recipeDetail.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    return periods * 15;
  };

  return (
    <div className="recipe__details">
      <div className="recipe__info">
        <i className="recipe__info-icon fa fa-stopwatch"></i>
        <span className="recipe__info-data recipe__info-data--minutes">
          {calcTime()}
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
            isLiked(params, likedRecipes) ? 'fas fa-heart' : 'far fa-heart'
          }
        ></i>
        {/* <i className="fas fa-heart"></i> */}
      </button>
    </div>
  );
};

export default RecipeDetails;
