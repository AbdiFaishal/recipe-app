import React, { Component } from "react";

// font-awesome offline
import NavBar from "../components/NavBar";
import ResultRecipe from "../components/ResultRecipe";

import RecipePage from "../components/RecipePage";
import ConfirmModal from "./../components/ConfirmModal";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.readStorage();
  }

  persistData = () => {
    const { likedRecipes } = this.state;
    localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
  };

  readStorage = () => {
    const storage = JSON.parse(localStorage.getItem("likedRecipes"));

    //  Restore likes from the localStorage
    if (storage) {
      this.setState({
        likedRecipes: storage,
      });
    }
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={NavBar} />
          <Route path="/">
            <ConfirmModal />
          </Route>
          <Route path="/" component={ResultRecipe} />
          <Route path="/:id" component={RecipePage} />
        </div>
      </Router>
    );
  }
}

export default App;
