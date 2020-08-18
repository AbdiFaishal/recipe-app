import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipeDetail } from "../redux/actions";
import useLimitTitle from "./hooks/useLimitTitle";
import useRemoveClass from "./hooks/useRemoveClass";

const Recipe = ({ image_url, publisher, recipe_id, title }) => {
  const [titleConvert] = useLimitTitle();
  const dispatch = useDispatch();
  const removeClass = useRemoveClass();

  const handleRecipeDetail = (e, recipe_id) => {
    dispatch(getRecipeDetail(recipe_id));
    removeClass();

    document
      .querySelector(`.results__link[href="/recipe-app/${recipe_id}"]`)
      .classList.add("result__link--active");
  };

  return (
    <li>
      <Link
        to={`/recipe-app/${recipe_id}`}
        onClick={(e) => handleRecipeDetail(e, recipe_id)}
        className="results__link"
        // href={`#${recipe_id}`}
      >
        <figure className="results__fig">
          <img src={image_url} alt={title} />
        </figure>
        <div className="results__data">
          <h4 className="results__name">{titleConvert(title)}</h4>
          <p className="results__author">{publisher}</p>
        </div>
      </Link>
    </li>
  );
};

export default Recipe;
