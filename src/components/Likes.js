import React from "react";
import Like from "./Like";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "./../actions/index";

// {likedRecipes, clearLikes, getRecipeDetail, handleModal}
const Likes = () => {
  const dispatch = useDispatch();

  const likedRecipes = useSelector((state) => state.handleLikes.likedRecipes);
  const heartActive = likedRecipes.length ? "active" : null;

  return (
    <div className="likes">
      <div className="likes__field">
        <i className={`fas fa-heart ${heartActive}`}></i>
      </div>
      <div className="likes__panel">
        <ul className="likes__list">
          {likedRecipes.length > 0 ? (
            likedRecipes.map((el, i) => {
              return (
                <Like
                  key={el.id}
                  id={el.id}
                  img={el.img}
                  title={el.title}
                  author={el.author}
                />
              );
            })
          ) : (
            <p className="empty__favorite">Your favorite recipe is empty</p>
          )}
        </ul>
        {likedRecipes.length ? (
          <button
            onClick={() => dispatch(handleModal(true))}
            className="btn delete__likes"
          >
            <i className="fas fa-trash"></i>
            <span>Clear All</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Likes;
