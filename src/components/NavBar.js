import React from "react";
import Logo from "./AppLogo";
import SearchForm from "./SearchForm";
import Likes from "./Likes";

const NavBar = () => {
  return (
    <header className="header">
      <Logo />
      <SearchForm />
      <Likes />
    </header>
  );
};

export default NavBar;
