import React from "react";
import "./NewQuote.css";

const NewQuote = ({ newQuote }) => {
  return (
    <div className="btn new-quote">
      <button onClick={newQuote}>New quote</button>
    </div>
  );
};

export default NewQuote;
