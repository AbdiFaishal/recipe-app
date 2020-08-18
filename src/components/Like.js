import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipeDetail } from "../actions";
import useLimitTitle from "./hooks/useLimitTitle";
import useRemoveClass from "./hooks/useRemoveClass";

const Like = ({ id, title, author, img }) => {
  const dispatch = useDispatch();
  const [titleConvert] = useLimitTitle();
  const removeClass = useRemoveClass();

  const handleClick = (id) => {
    dispatch(getRecipeDetail(id));
    removeClass();

    // Like active class on click
    document
      .querySelector(`.likes__link[href="/recipe-app/${id}"]`)
      .classList.add("result__link--active");
  };

  return (
    <li>
      <Link
        to={`/recipe-app/${id}`}
        onClick={() => handleClick(id)}
        className="likes__link"
      >
        <figure className="likes__fig">
          <img src={img} alt="Test" />
        </figure>
        <div className="likes__data">
          <h4 className="likes__name">{titleConvert(title)}</h4>
          <p className="likes__author">{author}</p>
        </div>
      </Link>
    </li>
  );
};

export default Like;
