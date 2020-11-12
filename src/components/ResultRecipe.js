import React from 'react';
import RecipeList from './RecipeList';
import Pagination from './Pagination';

const ResultRecipe = ({
  data,
  loading,
  pagination,
  fullData,
  paginate,
  handleRecipeDetail,
  recipeAPIResult,
  errorMessage,
}) => {
  return (
    <div className="results">
      <RecipeList
      // data={data}
      // loading={loading}
      // pagination={pagination}
      // handleRecipeDetail={handleRecipeDetail}
      // recipeAPIResult={recipeAPIResult}
      // errorMessage={errorMessage}
      />
      {loading ? null : (
        <Pagination
          pagination={pagination}
          fullData={fullData}
          data={data}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default ResultRecipe;
