import React, { Component } from "react";
import { connect } from "react-redux";

// font-awesome offline
import "../webfonts/all.css";
import NavBar from "../components/NavBar";
import ResultRecipe from "../components/ResultRecipe";

// import { proxy } from "./../config";
// import axios from "axios";
import RecipePage from "../components/RecipePage";
import ConfirmModal from "./../components/ConfirmModal";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import {
//   setSearchField,
//   resetSearchField,
//   isInputEmpty,
//   getRecipes,
//   getRecipeDetail,
//   addLike,
//   deleteLike,
//   handlePage,
// } from "./../actions/index";

// const mapStateToProps = (state) => ({
//   searchField: state.searchField.searchField,
//   emptyInput: state.searchField.emptyInput,
//   recipesList: state.getRecipes.recipes,
//   isPending: state.getRecipes.isPending,
//   error: state.getRecipes.error,
//   isPendingDetail: state.getRecipeDetail.isPending,
//   recipeDetail: state.getRecipeDetail.recipeDetail,
//   errorDetail: state.getRecipeDetail.error,
//   likedRecipes: state.handleLikes.likedRecipes,
//   currentPage: state.handlePagination.currentPage,
//   listPerPage: state.handlePagination.listPerPage,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//   resetSearch: () => dispatch(resetSearchField()),
//   isInputEmpty: (value) => dispatch(isInputEmpty(value)),
//   onRequestRecipes: (query) => dispatch(getRecipes(query)),
//   onRequestRecipeDetail: (id) => dispatch(getRecipeDetail(id)),
//   addLike: (recipe) => dispatch(addLike(recipe)),
//   deleteLike: (recipe) => dispatch(deleteLike(recipe)),
//   handlePage: (page) => dispatch(handlePage(page)),
// });

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     searchInput: "",
  //     emptyInput: null,
  //     recipes: [],
  //     recipeDetail: {},
  //     likedRecipes: [],
  //     errorMessage: "",
  //     loadingRecipe: false,
  //     loadingDetail: false,
  //     recipeAPIResult: null,
  //     modalOpen: false,
  //     pagination: {
  //       currentPage: 1,
  //       listPerPage: 10,
  //     },
  //   };
  // }

  componentDidMount() {
    this.readStorage();
  }

  // handleInputChange = (e) => {
  //   this.setState({
  //     searchInput: e.target.value,
  //   });
  // };

  /*
  getRecipes = async () => {
    const { searchField } = this.props;

    this.setState({
      loadingRecipe: true,
    });
    try {
      const res = await axios.get(
        `${proxy}https://recipesapi.herokuapp.com/api/search?q=${searchField}`
      );

      this.setState({
        recipes: res.data.recipes,
        loadingRecipe: false,
        recipeAPIResult: res.data.count,
        errorMessage: "",
      });
    } catch (err) {
      alert("Something wrong with the search... ", err);

      this.setState({
        loadingRecipe: false,
        errorMessage: err.message,
      });
    }
  };
  */

  /*
  getRecipeDetail = async (id) => {
    this.setState({
      loadingDetail: true,
    });

    try {
      const res = await axios.get(
        `${proxy}https://recipesapi.herokuapp.com/api/get?rId=${id}`
      );

      this.setState({
        loadingDetail: false,
        recipeDetail: res.data.recipe,
        errorMessage: "",
      });
    } catch (err) {
      alert("Something wrong with the recipe details... ", err);
      this.setState({
        errorMessage: err.message,
      });
    }
  };
*/
  /*
  handleSearch = (e) => {
    const { searchInput, recipes } = this.state;
    const {
      searchField,
      resetSearch,
      isInputEmpty,
      recipesList,
      onRequestRecipes,
      handlePaginate,
    } = this.props;

    e.preventDefault();

    this.removeActiveClass();

    if (recipesList.length > 0) {
      document.querySelector(".results__pages .link-1").classList.add("active");
      document.querySelector(".results__pages .list-1").classList.add("active");
    }

    if (searchField === "") {
      this.setState({
        emptyInput: true,
      });

      isInputEmpty(true);
    } else if (searchField !== "") {
      // this.getRecipes();
      onRequestRecipes(searchField);
      resetSearch();
      isInputEmpty(null);
      // handlePaginate(1)

      this.setState({
        searchInput: "",
        emptyInput: null,
        pagination: {
          ...this.state.pagination,
          currentPage: 1,
        },
      });
    }
  };
 */

  /*
  removeActiveClass = () => {
    document
      .querySelectorAll(".results__pages li")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(".results__pages a")
      .forEach((el) => el.classList.remove("active"));
  };
*/
  /*
  handlePaginate = (pageNumber, e) => {
    const { handlePage } = this.props;
    this.setState({
      pagination: {
        ...this.state.pagination,
        currentPage: pageNumber,
      },
    });

    handlePage(pageNumber);

    this.removeActiveClass();
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  };
  */
  /*
  handleRecipeDetail = (e, recipe_id) => {
    const { onRequestRecipeDetail } = this.props;
    this.getRecipeDetail(recipe_id);
    onRequestRecipeDetail(recipe_id);

    document
      .querySelectorAll(".results__link")
      .forEach((el) => el.classList.remove("result__link--active"));

    document
      .querySelector(`a[href="/${recipe_id}"]`)
      .classList.add("result__link--active");
  };
  */

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

  // Check if the current state has the same id with the input user id
  // isLiked(id, state) {
  //   return state.findIndex((el) => el.id === id) !== -1;
  // }

  // deleteLike(id, target) {
  //   const index = target.findIndex((el) => el.id === id);
  //   target.splice(index, 1);
  // }

  /*
  handleLike = (event, params) => {
    // const { recipeDetail, likedRecipes } = this.state;
    const { addLike, deleteLike, recipeDetail, likedRecipes } = this.props;

    const currentID = params;
    let likes = [...likedRecipes];
    // let like = {};

    // User has NOT yet liked the currect recipe and add it
    if (!this.isLiked(currentID, likedRecipes)) {
      const like = {
        id: recipeDetail.recipe_id,
        title: recipeDetail.title,
        author: recipeDetail.publisher,
        img: recipeDetail.image_url,
      };

      // this.setState(
      //   {
      //     likedRecipes: [...likedRecipes, like],
      //   },
      //   () =>
      //     // Persist data in localStorage
      //     this.persistData()
      // );

      addLike(like);

      // User HAS liked the currect recipe and delete it
    } else {
      this.deleteLike(currentID, likes);
      // const index = likedRecipes.findIndex((el) => el.id === currentID);
      // likes.splice(index, 1);

      // this.setState(
      //   {
      //     likedRecipes: likes,
      //   },
      //   // Persist data in localStorage
      //   () => this.persistData()
      // );
      deleteLike(likes);
    }
  };
*/
  /*
  handleModal = (value) => {
    this.setState({
      modalOpen: value,
    });
  };

  handleConfirm = () => {
    // clear liked list
    this.setState(
      {
        likedRecipes: [],
        modalOpen: false,
      },
      () => this.persistData()
    );
  };
*/
  render() {
    // const indexOfLastPost = pagination.currentPage * pagination.listPerPage;
    // const indexOfFirstPost = indexOfLastPost - pagination.listPerPage;
    // const currentList = recipesList.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <Router>
        <div className="container">
          <Route
            path="/"
            render={(props) => (
              <NavBar
                {...props}
                // emptyInput={emptyInput}
                // onChange={onSearchChange}
                // inputValue={searchField}
                // handleSearch={this.handleSearch}
                // likedRecipes={likedRecipes}
                // getRecipeDetail={this.getRecipeDetail}
                // clearLikes={this.clearLikes}
                // modalOpen={modalOpen}
                // handleModal={this.handleModal}
                // handleCancel={this.handleCancel}
              />
            )}
          />

          <Route path="/">
            <ConfirmModal
            // handleModal={this.handleModal}
            // modalOpen={modalOpen}
            // handleConfirm={this.handleConfirm}
            />
          </Route>

          <Route
            path="/"
            render={(props) => (
              <ResultRecipe
                {...props}
                // data={currentList}
                // fullData={recipesList}
                // loading={loadingRecipe}
                // loading={isPending}
                // pagination={pagination}
                // paginate={this.handlePaginate}
                // handleRecipeDetail={this.handleRecipeDetail}
                // recipeAPIResult={recipeAPIResult}
                // errorMessage={error}
              />
            )}
          />
          <Route
            path="/:id"
            render={(props) => (
              <RecipePage
                {...props}
                // recipeDetail={recipeDetail}
                // loadingDetail={loadingDetail}
                // getRecipeDetail={this.getRecipeDetail}
                // handleLike={this.handleLike}
                // likedRecipes={likedRecipes}
                // isLiked={this.isLiked}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
