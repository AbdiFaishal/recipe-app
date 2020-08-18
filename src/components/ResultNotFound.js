import React, { useState, useEffect } from "react";
import sad from "../img/icons/sad.png";
import useRandom from "./hooks/useRandom";

const ResultNotFound = () => {
  const [randomWord, setRandomWord] = useState("");
  const random = useRandom();

  useEffect(() => {
    const keywords = [
      "bread",
      "vegan",
      "chicken",
      "pasta",
      "rice",
      "tofu",
      "potato",
      "egg",
      "salad",
      "apple",
      "chocolate",
      "cheese",
      "beef",
      "soup",
      "salmon",
    ];

    setRandomWord(keywords[random(0, keywords.length)]);
  }, [random]);

  return (
    <div className="result__none">
      <img className="sad-face" src={sad} alt="sad face" />
      <p className="text">No Result Found!</p>
      <div>
        <span className="tips">
          Tips
          <span className="tips-content">
            : try another <span className="keyword">keyword</span>, for example
            '{randomWord}
            '.
          </span>
        </span>
      </div>
      <span className="tips">
        Note
        <span className="tips-content">
          : <span className="keyword">keyword</span> must be in english.
        </span>
      </span>
    </div>
  );
};

export default ResultNotFound;
