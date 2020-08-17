import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handlePage } from "../actions";
import useResetActiveClass from "./hooks/useResetActiveClass";
import usePageNumber from "./hooks/usePageNumber";

const Pagination = () => {
  const [removeResultsClass] = useResetActiveClass();
  const [pageNumber, calculatePage] = usePageNumber();

  const dispatch = useDispatch();
  const listPerPage = useSelector(
    (state) => state.handlePagination.listPerPage
  );
  const recipes = useSelector((state) => state.getRecipes.recipes);
  const recipeDetail = useSelector(
    (state) => state.getRecipeDetail.recipeDetail
  );

  console.log(recipeDetail);
  const totalRecipes = recipes.length;

  calculatePage(totalRecipes, listPerPage);

  const handlePaginate = (pageNumber, e) => {
    dispatch(handlePage(pageNumber));

    removeResultsClass();

    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  };

  const currentPath = useLocation().pathname;

  useEffect(() => {
    // Apply pagination active class on first render
    if (recipes.length > 0) {
      document.querySelector(".results__pages .list-1").classList.add("active");
      document.querySelector(".results__pages .link-1").classList.add("active");
    }
  }, [recipes]);

  return (
    <div className="results__pages">
      <ul>
        {pageNumber.map((number) => (
          <li className={`list-${number}`} key={number}>
            <Link
              to={currentPath}
              className={`link-${number}`}
              // onClick={(e) => paginate(number, e)}
              onClick={(e) => handlePaginate(number, e)}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
