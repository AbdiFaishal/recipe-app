import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useSlicedList = () => {
  const [slicedList, setSlicedList] = useState([]);

  const recipes = useSelector((state) => state.getRecipes.recipes);
  const currentPage = useSelector(
    (state) => state.handlePagination.currentPage
  );
  const listPerPage = useSelector(
    (state) => state.handlePagination.listPerPage
  );

  console.log("currentPage", currentPage);
  console.log("listPerPage", listPerPage);

  useEffect(() => {
    const indexOfLastPost = currentPage * listPerPage;
    const indexOfFirstPost = indexOfLastPost - listPerPage;

    setSlicedList(recipes.slice(indexOfFirstPost, indexOfLastPost));
  }, [recipes, currentPage, listPerPage]);

  return [slicedList];
};

export default useSlicedList;
