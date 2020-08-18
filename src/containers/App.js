import React from "react";

// font-awesome offline
import NavBar from "../components/NavBar";
import ResultRecipe from "../components/ResultRecipe";

import RecipePage from "../components/RecipePage";
import ConfirmModal from "./../components/ConfirmModal";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  // componentDidMount() {
  //   this.readStorage();
  // }

  // persistData = () => {
  //   const { likedRecipes } = this.state;
  //   localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
  // };

  // readStorage = () => {
  //   const storage = JSON.parse(localStorage.getItem("likedRecipes"));

  //   //  Restore likes from the localStorage
  //   if (storage) {
  //     this.setState({
  //       likedRecipes: storage,
  //     });
  //   }
  // };

  return (
    <Router>
      <div className="container">
        <Route path="/recipe-app" component={NavBar} />
        <Route path="/recipe-app">
          <ConfirmModal />
        </Route>
        <Route path="/recipe-app" component={ResultRecipe} />
        <Route path="/recipe-app/:id" component={RecipePage} />
      </div>
    </Router>
  );
};

export default App;
