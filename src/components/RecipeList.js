import React from "react";
import Recipe from "./Recipe";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector } from "react-redux";
import useSlicedList from "./hooks/useSlicedList";

// {
//   data,
//   loading,
//   pagination,
//   handleRecipeDetail,
//   recipeAPIResult,
//   errorMessage,
// }
const RecipeList = () => {
  const [slicedList] = useSlicedList();
  // const recipes = useSelector((state) => state.getRecipes.recipes);
  // const currentPage = useSelector(
  //   (state) => state.handlePagination.currentPage
  // );
  // const listPerPage = useSelector(
  //   (state) => state.handlePagination.listPerPage
  // );

  const loading = useSelector((state) => state.getRecipes.isPending);
  const errorMessage = useSelector((state) => state.getRecipes.error);
  const recipeAPIResult = useSelector(
    (state) => state.getRecipes.recipeAPIResult
  );

  // const indexOfLastPost = currentPage * listPerPage;
  // const indexOfFirstPost = indexOfLastPost - listPerPage;
  // const currentList = recipes.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) {
    return <LoadingSpinner />;
  } else if (recipeAPIResult === 0) {
    return <p className="result__none">Sorry, no result found...</p>;
  }

  if (errorMessage !== "") {
    return <p className="result__none">{errorMessage}</p>;
  }

  return (
    <ul className="results__list">
      {slicedList.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </ul>
  );
};

export default RecipeList;
