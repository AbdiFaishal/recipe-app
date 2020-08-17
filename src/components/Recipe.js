import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipeDetail } from "../actions";
import useLimitTitle from "./hooks/useLimitTitle";
// Function for converting string (condition: title max character are 18)
// export const limitRecipeTitle = (title, limit = 18) => {
//   const newTitle = [];
//   if (title.length > limit) {
//     title.split(" ").reduce((acc, cur) => {
//       if (acc + cur.length <= limit) {
//         newTitle.push(cur);
//       }
//       return acc + cur.length;
//     }, 0);

//     // return the result
//     return `${newTitle.join(" ")}...`;
//   } else {
//     return title;
//   }
// };

const Recipe = ({
  image_url,
  publisher,
  recipe_id,
  title,
  // handleRecipeDetail,
}) => {
  const [titleConvert] = useLimitTitle();
  const dispatch = useDispatch();

  const handleRecipeDetail = (recipe_id) => {
    dispatch(getRecipeDetail(recipe_id));

    document
      .querySelectorAll(".results__link")
      .forEach((el) => el.classList.remove("result__link--active"));

    document
      .querySelector(`a[href="/${recipe_id}"]`)
      .classList.add("result__link--active");
  };

  return (
    <li>
      <Link
        to={`/${recipe_id}`}
        onClick={() => handleRecipeDetail(recipe_id)}
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
