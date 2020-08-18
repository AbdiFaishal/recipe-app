import React from "react";
import IngredientItem from "./IngredientItem";

const IngredientList = ({ recipeDetail }) => {
  return (
    <ul className="recipe__ingredient-list">
      {recipeDetail.ingredients &&
        recipeDetail.ingredients.map((ingredient, i) => (
          <IngredientItem key={i} ingredient={ingredient} />
        ))}
    </ul>
  );
};

export default IngredientList;
