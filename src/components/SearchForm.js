import React from "react";
import {
  setSearchField,
  isInputEmpty,
  getRecipes,
  resetSearchField,
} from "./../actions/index";
import { useSelector, useDispatch } from "react-redux";

const SearchForm = ({ onChange, inputValue, handleSearch }) => {
  const dispatch = useDispatch();
  const emptyInput = useSelector((state) => state.searchField.emptyInput);
  const searchField = useSelector((state) => state.searchField.searchField);

  const onChangeSearch = (e) => {
    dispatch(setSearchField(e.target.value));
  };

  const onClickSearch = (e) => {
    e.preventDefault();

    if (searchField === "") {
      dispatch(isInputEmpty(true));
    } else if (searchField !== "") {
      dispatch(getRecipes(searchField));
      dispatch(resetSearchField());
      dispatch(isInputEmpty(false));
    }
  };

  const inputValidation = emptyInput ? (
    <p className="input__validation">Please fill in the form above</p>
  ) : null;

  return (
    <form className="search">
      <input
        value={searchField}
        type="text"
        className="search__field"
        placeholder="Search over your favorites recipes..."
        onChange={onChangeSearch}
      />
      {inputValidation}
      <button className="btn search__btn" onClick={onClickSearch}>
        <i className="fas fa-search"></i>
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
