import React from "react";
import "./Author.css";

const Author = ({ quotes, random }) => {
  const author = quotes.length > 0 ? `${quotes[random].author}` : "loading...";
  return (
    <div id="author">
      {author === "null" ? <p>- Anonymous</p> : <p>- {author}</p>}
    </div>
  );
};

export default Author;
