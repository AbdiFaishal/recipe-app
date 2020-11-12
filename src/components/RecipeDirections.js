import React from "react";

const RecipeDirections = ({ recipeDetail }) => {
  return (
    <div className="recipe__directions">
      <h2 className="heading-2">How to cook it</h2>
      <p className="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span className="recipe__by">{recipeDetail.publisher}</span>. Please
        check out directions at their website.
      </p>
      <a
        className="btn-small recipe__btn"
        href={recipeDetail.source_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Directions</span>
        {/* <svg className="search__icon">
          <use href="img/icons.svg#icon-triangle-right"></use>
        </svg> */}
        <i className="fa fa-location-arrow"></i>
      </a>
    </div>
  );
};

export default RecipeDirections;
