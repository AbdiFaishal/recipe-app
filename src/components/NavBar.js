import React from "react";
import Logo from "./AppLogo";
import SearchForm from "./SearchForm";
import Likes from "./Likes";

const NavBar = ({
  onChange,
  inputValue,
  handleSearch,
  likedRecipes,
  getRecipeDetail,
  emptyInput,
  clearLikes,
  modalOpen,
  handleModal,
}) => {
  return (
    <header className="header">
      <Logo />
      <SearchForm
        emptyInput={emptyInput}
        onChange={onChange}
        inputValue={inputValue}
        handleSearch={handleSearch}
      />
      <Likes
        likedRecipes={likedRecipes}
        getRecipeDetail={getRecipeDetail}
        clearLikes={clearLikes}
        modalOpen={modalOpen}
        handleModal={handleModal}
      />
    </header>
  );
};

export default NavBar;
