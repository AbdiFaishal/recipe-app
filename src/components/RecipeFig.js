import React from "react";

const RecipeFig = ({ recipeDetail }) => {
  return (
    <figure className="recipe__fig">
      <img
        src={recipeDetail.image_url}
        alt={recipeDetail.title}
        className="recipe__img"
      />
      <h1 className="recipe__title">
        <span>{recipeDetail.title}</span>
      </h1>
    </figure>
  );
};

export default RecipeFig;
