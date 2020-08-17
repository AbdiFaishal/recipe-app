import React from "react";

const IngredientItem = ({ ingredient }) => {
  return (
    <li className="recipe__item">
      <i className="recipe__icon far fa-check-circle"></i>
      {/* <svg className="recipe__icon">
        <use href="img/icons.svg#icon-check"></use>
      </svg> */}
      <div className="recipe__count"></div>
      <div className="recipe__ingredient">
        <span className="recipe__unit"></span>
        {ingredient}
      </div>
    </li>
  );
};

export default IngredientItem;
