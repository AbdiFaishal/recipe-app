import axios from 'axios';
import { proxy } from './../config';

import {
  CHANGE_SEARCH_FIELD,
  RESET_SEARCH_FIELD,
  IS_INPUT_EMPTY,
  FETCH_RECIPES_PENDING,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
  FETCH_DETAIL_PENDING,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAILED,
  ADD_LIKE,
  DELETE_LIKE,
  CHANGE_PAGINATION_PAGE,
  HANDLE_MODAL,
  HANDLE_CONFIRM,
} from './../constants/action-types';

// search input form
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// reset search input after click event
export const resetSearchField = () => ({
  type: RESET_SEARCH_FIELD,
});

// check if search input is empty
export const isInputEmpty = (value) => ({
  type: IS_INPUT_EMPTY,
  payload: value,
});

// fetching recipe from API
export const getRecipes = (query) => async (dispatch) => {
  dispatch({ type: FETCH_RECIPES_PENDING });
  try {
    // const res = await axios.get(
    //   `${proxy}https://recipesapi.herokuapp.com/api/search?q=${query}`
    // );
    const res = await axios.get(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );
    console.log('res: ', res.data);
    dispatch({
      type: FETCH_RECIPES_SUCCESS,
      payload: { data: res.data.recipes, count: res.data.count },
    });
  } catch (err) {
    dispatch({
      type: FETCH_RECIPES_FAILED,
      payload: err.response.data.error,
    });
  }
  // axios
  //   .get(`${proxy}https://recipesapi.herokuapp.com/api/searchh?q=${query}`)
  //   .then((res) => {
  //     dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data.recipes });
  //   })
  //   .catch((error) =>
  //     dispatch({ type: FETCH_RECIPES_FAILED, payload: error.message })
  //   );
};

// fetching recipe detail from API
export const getRecipeDetail = (id) => async (dispatch) => {
  dispatch({ type: FETCH_DETAIL_PENDING });
  try {
    // const res = await axios.get(
    //   `${proxy}https://recipesapi.herokuapp.com/api/get?rId=${id}`
    // );
    const res = await axios.get(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );
    dispatch({ type: FETCH_DETAIL_SUCCESS, payload: res.data.recipe });
  } catch (error) {
    dispatch({ type: FETCH_DETAIL_FAILED, payload: error });
  }
  //   axios
  //     .get(`${proxy}https://recipesapi.herokuapp.com/api/get?rId=${id}`)
  //     .then((res) => {
  //       dispatch({ type: FETCH_DETAIL_SUCCESS, payload: res.data.recipe });
  //     })
  //     .catch((error) => dispatch({ type: FETCH_DETAIL_FAILED, payload: error }));
};

// Handle likes recipe
export const addLike = (recipe) => ({
  type: ADD_LIKE,
  payload: recipe,
});

export const deleteLike = (recipe) => ({
  type: DELETE_LIKE,
  payload: recipe,
});

export const handleModal = (value) => ({
  type: HANDLE_MODAL,
  payload: value,
});

export const handleConfirm = () => ({
  type: HANDLE_CONFIRM,
});

// Handle pagination
export const handlePage = (pageNumber) => ({
  type: CHANGE_PAGINATION_PAGE,
  payload: pageNumber,
});
