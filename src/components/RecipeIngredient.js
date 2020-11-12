import React from "react";
import IngredientList from "./IngredientList";

const RecipeIngredient = ({ recipeDetail }) => {
  return (
    <div className="recipe__ingredients">
      <IngredientList recipeDetail={recipeDetail} />

      <button className="btn-small recipe__btn">
        {/* <svg className="search__icon">
          <use href="img/icons.svg#icon-shopping-cart"></use>
        </svg> */}
        {/* <i className="fas fa-shopping-cart"></i> */}
        <span>Add Review</span>
      </button>
    </div>
  );
};

export default RecipeIngredient;
