import React from "react";

const Button = ({ quotes, random, logo }) => {
  const text = () => {
    let text = "";
    if (quotes && random) {
      text = quotes[random].text;
    }
    return text;
  };

  const author = () => {
    let author = "";
    if (quotes && random) {
      author = quotes[random].author;
    }
    return author === null ? "Anonymous" : author;
  };

  return (
    <div className="btn">
      <a
        href={`https://twitter.com/intent/tweet?text="${text()}" ${author()}&hashtags=quote`}
        className="twitter-share-button"
        target="_blank"
        data-text="hello world"
        data-hashtags="quote"
        data-show-count="false"
      >
        <i className={logo}></i>
      </a>
      <span class="tooltiptext">Tweet this quote!</span>
    </div>
  );
};

export default Button;
