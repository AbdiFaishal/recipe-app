import React from "react";

import NavBar from "../components/NavBar";
import ResultRecipe from "../components/ResultRecipe";

import RecipePage from "../components/RecipePage";
import ConfirmModal from "./../components/ConfirmModal";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Route path="/" component={NavBar} />
      <Route path="/">
        <ConfirmModal />
      </Route>
      <Route path="/" component={ResultRecipe} />
      <Route exact path="/:id" component={RecipePage} />
    </div>
  );
};

export default App;
