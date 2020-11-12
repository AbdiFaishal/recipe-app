import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipeDetail } from "../actions";
import useLimitTitle from "./hooks/useLimitTitle";

const Like = ({ id, title, author, img }) => {
  const dispatch = useDispatch();
  const [titleConvert] = useLimitTitle();

  return (
    <li>
      <Link
        to={`/${id}`}
        onClick={() => dispatch(getRecipeDetail(id))}
        className="likes__link"
      >
        <figure className="likes__fig">
          <img src={img} alt="Test" />
        </figure>
        <div className="likes__data">
          {/* <h4 className="likes__name">{limitRecipeTitle(title)}</h4> */}
          <h4 className="likes__name">{titleConvert(title)}</h4>
          <p className="likes__author">{author}</p>
        </div>
      </Link>
    </li>
  );
};

export default Like;
