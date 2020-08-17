import { combineReducers } from "redux";
import {
  searchField,
  getRecipes,
  getRecipeDetail,
  handleLikes,
  handlePagination,
} from "./reducers";

const rootReducers = combineReducers({
  searchField,
  getRecipes,
  getRecipeDetail,
  handleLikes,
  handlePagination,
});

export default rootReducers;
