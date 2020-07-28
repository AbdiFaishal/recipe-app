import React from "react";
import "./Text.css";

const Text = ({ quotes, random, randomColor }) => {
  return (
    <div id="text">
      <p>"{quotes.length > 0 ? `${quotes[random].text}` : "loading..."}</p>
    </div>
  );
};

export default Text;
