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
} from '../constants/action-types';

const initialStateSearch = {
  searchField: '',
  emptyInput: false,
};

export const searchField = (state = initialStateSearch, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
        emptyInput: false,
      };
    case RESET_SEARCH_FIELD:
      return {
        ...state,
        searchField: '',
      };
    case IS_INPUT_EMPTY:
      return {
        ...state,
        emptyInput: action.payload,
      };
    default:
      return state;
  }
};

const initialStateRecipes = {
  isPending: false,
  recipes: [],
  recipeAPIResult: null,
  error: '',
};

export const getRecipes = (state = initialStateRecipes, action) => {
  switch (action.type) {
    case FETCH_RECIPES_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload.data,
        isPending: false,
        recipeAPIResult: action.payload.count,
        error: '',
      };
    case FETCH_RECIPES_FAILED:
      return {
        ...state,
        recipes: [],
        recipeAPIResult: null,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

const initialStateRecipeDetail = {
  isPending: false,
  recipeDetail: {},
  error: '',
};

export const getRecipeDetail = (state = initialStateRecipeDetail, action) => {
  switch (action.type) {
    case FETCH_DETAIL_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        recipeDetail: action.payload,
        isPending: false,
      };
    case FETCH_DETAIL_FAILED:
      return {
        ...state,
        errorDetail: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

const initialStateLikes = {
  likedRecipes: [],
  modalOpen: false,
};

export const handleLikes = (state = initialStateLikes, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        likedRecipes: [...state.likedRecipes, action.payload],
      };
    case DELETE_LIKE:
      return {
        ...state,
        likedRecipes: action.payload,
      };
    case HANDLE_CONFIRM:
      return {
        ...state,
        likedRecipes: [],
        modalOpen: false,
      };
    case HANDLE_MODAL:
      return {
        ...state,
        modalOpen: action.payload,
      };
    default:
      return state;
  }
};

const initialStatePagination = {
  currentPage: 1,
  listPerPage: 10,
};

export const handlePagination = (state = initialStatePagination, action) => {
  switch (action.type) {
    case CHANGE_PAGINATION_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
