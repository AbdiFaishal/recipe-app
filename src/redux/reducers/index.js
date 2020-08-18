import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  searchField,
  getRecipes,
  getRecipeDetail,
  handleLikes,
  handlePagination,
} from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["handleLikes", "getRecipeDetail"],
};

const rootReducers = combineReducers({
  searchField,
  getRecipes,
  getRecipeDetail,
  handleLikes,
  handlePagination,
});

export default persistReducer(persistConfig, rootReducers);
